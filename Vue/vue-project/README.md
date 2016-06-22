#vue-project 基本框架

<pre>
###开发目录
├── README.md
├── dist                      // 项目build目录           
├── index.html                // 项目入口文件
├── package.json              // 项目配置文件
├── src                       // 生产目录
│   ├── views                 // 各种页面
│   |    ├── home.vue
│   |    ├── blog.vue
│   |    ├── about.vue
│   |    └── topic.vue
│   |
│   ├── components            // 各种组件
│   |    └── menu.vue
│   |
│   ├── libs                  // 工具库
│   |    ├── css
│   |    |    └── bootstrap.css
│   |    └── js
│   |         └── jquery.js
│   |
│   ├── assets                //静态文件
│   |    ├── css
│   |    |    └── index.css
│   |    ├── scss
│   |    |    └── index.scss
│   |    ├── js
│   |    |    └── index.js
│   |    └── images
│   |         └── index.png
│   |
│   ├── filters.js            // 过滤器
│   ├── routers.js            // 路由表
│   └── main.js               // Webpack 预编译入口
└── webpack.config.js  	      // Webpack 配置文件
</pre>

##注意
view里面的因为是根目录，所以在hot-reload的时候会导致刷新页面，单独的hot-reload只支持components中的.vue
