/**
* 路由表
* @author Sid
*/
import homeView from './views/home.vue'
import aboutView from './views/about.vue'
import blogView from './views/blog.vue'
import topicView from './views/topic.vue'

export default function(router){
    router.map({
        // '/':{ 这是异步的方法，会将代码分割
        //    component: function (resolve) {
        //      require(['./views/home.vue'],resolve)
        //    }
        // },
        '/': {
            component: homeView,
            name: 'home'
        },
        '/home': {
            component: homeView,
            name: 'home'
        },
        '/about': {
            component: aboutView,
            name: 'about'
        },
        '/topic': {
            component: topicView,
            name: 'topic'
        },
        '/blog': {
            component: blogView,
            name: 'blog'
        }
    });
}
