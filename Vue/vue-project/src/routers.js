/**
* 路由表
* @author Sid
*/

export default function(router){
    router.map({
    	 '/':{				//首页
            component: function (resolve) {
    	      require(['./views/home.vue'],resolve)
    	    }
        },
        '/home':{
        	name : 'home',				//首页
            component: function (resolve) {
    	      require(['./views/home.vue'],resolve)
    	    }
        },
        '/blog':{
        	name : 'blog',               //博客列表
            component: function (resolve) {
    	      require(['./views/blog.vue'],resolve)
    	    }
        },
        '/blog/topic':{
        	name : 'topic',
        	//文章详情
        	component: function (resolve) {
    	      require(['./views/topic.vue'],resolve)
    	    }
        },
        '/about':{
        	name : 'about',
        	//关于
        	component: function (resolve) {
    	      require(['./views/about.vue'],resolve)
    	    }
        }
    });
}
