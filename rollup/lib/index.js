/**
 * @file 程序入口
 * @author guoxianglin@baidu.com
 */
import info from './info';
import Msg from './msg';
import Xhr from './xhr';
import {obj2str, hasStorage} from './utils';

export default class Apm {
    constructor(options = {
        url: 'http://127.0.0.1:3000',
        appKey: '',
        isWebview: false
    }) {
        // 自定义设置
        this.options = options;
        // 浏览器信息
        this.info = info;
        // 消息栈
        this.msg = new Msg();
        // ajax消息栈
        this.ajaxMsg = new Msg();
        // default src
        this.src = options.url + '/apm.gif?'
        + `appKey=${options.appKey}&`
        + `_os=${this.info.os}&`
        + `_browser=${this.info.browser}&`
        + `_vn=${this.info.vn}&`;
        // 拦截ajax请求
        this.xhr = new Xhr();
        this.xhr.on('xhr_done', payload => {
            // NOTE: 这里得去重，或者重新写一个事件
            console.log(payload);
            this.ajaxMsg.push(...payload.map(e => JSON.stringify(e)));
            // this.report(payload);
        });
    }

    /**
     * 报告函数
     * @param {Object} msg 传入的消息
     */
    report(msg = {}) {
        // 请求一个1 * 1的gif
        let img = new Image();
        this.msg.push(obj2str(msg));
        // 判断浏览器是否有localStorage
        if (hasStorage) {
            let s = window.localStorage;
            // 若未初始化则先初始化
            if (JSON.parse(s.getItem('APM_IS_SENT') === null)) {
                s.setItem('APM_IS_SENT', true);
                s.setItem('APM_MSG', '');
            }
            // 假如有数据没有发送
            if (!JSON.parse(s.getItem('APM_IS_SENT'))) {
                this.msg.push(s.getItem('APM_MSG'));
                s.clear();
                s.setItem('APM_IS_SENT', true);
                s.setItem('APM_MSG', '');
            }
        }
        img.onload = () => {
            // 成功了之后就清空消息栈
            this.msg.clear();
        };
        img.onerror = () => {
            // 失败的话就存入localStorage
            if (hasStorage) {
                let s = window.localStorage;
                let str = s.getItem('APM_MSG');
                s.setItem('APM_IS_SENT', false);
                // 避免重传相同的消息
                if (str.indexOf(this.msg.getMsg()) !== -1) {
                    s.setItem('APM_MSG', this.msg.getMsg());
                }
                this.msg.clear();
            }
        };
        img.src = this.src + this.msg.getMsg();
    }
}
