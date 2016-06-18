/**
* @file fis3的配置文件
* @author sid
*/

// 模块化选项

// commonjs
// define()
// require('')
// require.async('')
// require.async([])
fis.hook('commonjs' {
    // 配置项
});

// AMD
// define()
// require([]);
// require('');
// npm install fis3-hook-amd
fis.hook('amd', {
  // 配置项
});

// 匹配widget下所有子目录了下的js文件
fis.match('/widget/**/*.js', {
    release: '/static/$0' //匹配文件的输出路径，$0的意思是上面那整一串的路径
    isMode: true, // 标记文件是否为组件化文件,会对组件化文件进行包装
});

// 指定组件的id
fis.match('/static/lib/jquery.js', {
    id: 'jquery', // 可以直接require('jquery')来获取这个组件
    isMod: true
});

// 文件是否带md5戳
fis.match('*.css', {
    useHash: true
});

// 不同的release指令
// 使用方法：fis3 release prod
fis.media('prod').match('*.css', {
    useHash: false
});

// 最终文件产出的后缀
fis.match('*.less', {
    rExt: '.css'
});

// 默认依赖的资源
fis.match('/widget/*.js', {
    requires: [
        'static/lib/jquery.js'
    ]
});

// 开启同名依赖
// 也就是说a.js会依赖a.css，不需要显式引用
fis.match('/widget/**', {
    useSameNameRequire: true
});

// 雪碧图
// 这个是默认开启的
fis.match('*.css', {
    useSprite: true
});

// 文件是否使用编译缓存
// 当设置使用编译缓存，每个文件的编译结果均会在磁盘中保存以供下次编译使用。设置为 false 后，则该文件每次均会被编译。
fis.match('**.html', {
    useCache: false
});

// 对文件进行压缩处理
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

// 对文件进行打包处理
fis.match('::package', {
    packager: fis.plugin('some-pack-plugin'), // 挂载一个打包插件
    spriter: fis.plugin('csssprites') // FIS2 默认启用 csssprites
});

fis.match('/widget/*.js', {
    packTo: '/static/widget_aio.js' // 匹配文件打包到此文件中
});

fis.match(['/widget/a/*.js', '/widget/b/*.js'], { // 用数组控制打包的东西
    packTo: '/static/widget_aio.js'
});
/*也可以酱紫*/
fis.media('prod')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('*.js', {
        packTo: '/static/all_others.js'
    })
    .match('*.css', {
        packTo: '/staitc/all_others.css'
    })
    .match('/widget/**/*.js', {
        packTo: '/static/all_comp.js'
    })
    .match('/widget/**/*.css', {
        packTo: '/static/all_comp.css'
    });


// 设置项目发布方式
fis.match('**', { // 所有文件
      deploy: fis.plugin('http-push', {
          receiver: 'http://target-host/receiver.php', // 接收端
          to: '/home/work/www' // 将部署到服务器的这个目录下
      })
  });

// 使用前端模版
fis.match('**.tmpl', {
     parser: fis.plugin('utc'), // invoke `fis-parser-utc`
     isJsLike: true
  });

// 不release某些资源
fis.match('*.inline.css', {
  // 设置 release 为 FALSE，不再产出此文件
  release: false
});

// ignore一些不希望被构建的资源
fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**'
]);
