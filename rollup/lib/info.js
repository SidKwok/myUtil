/**
 * @file 搜集浏览器信息
 * @author guoxianglin@baidu.com
 */

// 这部分或者可以交给后端做
// 后端可以获取相应的userAgent

// const ua = window.navigator.userAgent.toLowerCase();

/**
 * 判断操作系统
 * @return {string} 操作系统
 */
function defineOs() {
    // TODO: 判断操作系统
    return '';
}

/**
 * 判断浏览器类型
 * @return {string} 浏览器类型
 */
function defineBrowser() {
    // TODO: 判断浏览器类型
    return '';
}

/**
 * 判断浏览器版本
 * @return {string} 浏览器版本
 */
function defineVn() {
    // TODO: 判断浏览器版本
    return '';
}

export default {
    os: encodeURIComponent(defineOs()),
    browser: encodeURIComponent(defineBrowser()),
    vn: encodeURIComponent(defineVn())
};
