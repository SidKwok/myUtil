import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers';

Vue.use(VueRouter);


var app = Vue.extend({});

var router = new VueRouter();

routerMap(router);

router.start(app, '#app');
