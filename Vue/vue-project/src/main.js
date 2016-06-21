/**
* 程序入口
* @author Sid
*/

var Vue = require('vue')
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var routerMap = require('./routers').routerMap;

//实例化vue模块
Vue.use(VueRouter);
Vue.use(VueResource);

// 创建一个空组件
var app = Vue.extend({});

//实例化VueRouter
var router = new VueRouter({
    // 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// 路由表
routerMap(router);

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})

router.start(app, "#app");
