/**
* @file fis2的配置文件
* @author sid
*/

fis.config.merge({
    // 命名空间
    namespace : 'Home',

    // 对项目的整体作设置
    project: {
        charset : 'gbk',                 // 产出文件的编码
        md5Length : 7,                   // md5的长度
        md5Connector: '_',               // 与md5连接的字符
        include: 'src/**',               // 只有命中include里面的东西才会被视为源码，其他则忽略
        exclude: ['dist/**', 'test/**'], // 除去include里面的某些文件
    },

    // 对单个文件进行处理
    modules: {
        parse: {
            coffee: 'coffee-script',       // 用fis-parser-coffee-script处理后缀名为.coffee的文件
            less: ['less'],                // 也支持用数组
            md: 'marked'                   // 用fis-parser-marked处理后缀名为.md的文件
        },
        preprocessor: {                    // 预处理
            css: 'image-set'               // 和上面的差不多，键名是文件的后缀名
        },
        postprocessor: {                   // 后处理
            js: 'jswrapper'
        },
        lint: {
            js: 'jshint'
        },
        test: {                            // 测试后缀名为js的文件
            js: 'phantomjs'
        },
        // fis release -o
        optimizer: {                       // 单文件编译过程中的最后阶段
            js : 'uglify-js',
            css : 'clean-css',
            png : 'png-compressor'
        },
        // fis release -p
        prepackager : 'oo, xx',            // 在fis打包操作前调用的插件， 不管调用fis release命令时是否使用 --pack 参数，该插件均会被调用
        packager : 'your_packager',        // 打包调用fis-packager-your_packager插件进行处理
        postpackager: 'your_postpackager', // 打包后调用fis-postpackager-your_postpackager插件进行处理
        spriter : 'your_spriter',          // 打包后处理csssprite的插件
    },

    // 主要用于插件的数据配置
    settings: {
        optimizer : {
            'uglify-js' : {                //fis-optimizer-uglify-js插件的配置数据
                output : {
                    max_line_len : 500
                }
            },
            'clean-css' : {                //fis-optimizer-clean-css插件的配置数据
                keepBreaks : true
            }
        },
        postprocessor: {},
    },

    // 定制项目文件属性，包括但不限于 产出路径，访问url，资源id，默认依赖，文件类型。
    roadmap: {
        path: [
            {
                //所有widget目录下的js文件
                reg : 'widget/**.js',
                //是模块化的js文件（标记为这种值的文件，会进行amd或者闭包包装）
                isMod : true,
                //默认依赖lib.js
                requires : [ 'lib.js' ],
                //向产出的map.json文件里附加一些信息
                extras : { say : '123' },
                //编译后产出到 /static/widget/xxx 目录下
                release : '/static$&'
            },
            {
                //所有的ico文件
                reg : '**.ico',
                //发布的时候即使加了--md5参数也不要生成带md5戳的文件
                useHash : false,
                //发布到/static/xxx目录下
                release : '/static$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/images\/(.*\.(?:png|gif))/i,
                //访问这些图片的url是 '/m/xxxx?log_id=123'
                url : '/m/$1?log_id=123',
                //发布到/static/pic/xxx目录下
                release : '/static/pic/$1'
            },
        ],

        // 设置静态资源的域名前缀
        domain: { // fis release --domains
            //widget目录下的所有css文件使用 http://css1.example.com 作为域名
            'widget/**.css' : 'http://css1.example.com',
            //所有的js文件使用 http://js1.example.com 或者  http://js2.example.com 作为域名
            '**.js' : ['http://js1.example.com', 'http://js2.example.com'],
            //所有图片文件，使用 http://img.example.com 作为域名
            'image' : ['http://img.example.com']
        },

        // 设置项目的发布方式
        deploy: {
            //使用fis release --dest remote来使用这个配置
            remote : {
                //如果配置了receiver，fis会把文件逐个post到接收端上
                receiver : 'http://www.example.com/path/to/receiver.php',
                //从产出的结果的static目录下找文件
                from : '/static',
                //保存到远端机器的/home/fis/www/static目录下
                //这个参数会跟随post请求一起发送
                to : '/home/fis/www/',
                //通配或正则过滤文件，表示只上传所有的js文件
                include : '**.js',
                //widget目录下的那些文件就不要发布了
                exclude : /\/widget\//i,
                //支持对文件进行字符串替换
                replace : {
                    from : 'http://www.online.com',
                    to : 'http://www.offline.com'
                }
            },
            // 可以设置多个输出路径
            output: {}
        },

        // 配置要打包合并的文件
        pack: { // 键名为输出的文件，数组里的是需要打包合并的文件
            '/Public/static/pkg/static.all.js': [
                /\/static\/js\/libs\/modjs\/mod.js$/i,
                /\/static\/js\/libs\/jquery-1.8.3.min.js$/i,
                /\/static\/js\/libs\/jquery.form.js$/i,
                /\/static\/js\/libs\/jquery.autocomplete.js$/i,
            ],
            '/Public/static/style.css': [
                /\/static\/css\/base.css$/i,
                /\/static\/css\/style.css$/i,
                /\/widget\/header\/header.css$/i,
            ],
        }
    }
});
