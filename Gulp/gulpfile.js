/**
* @file some useful task with gulp
* @author Sid
*/


var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack-stream');


/**
* 压缩js文件
*/
gulp.task('uglifyjs', function(){
     return gulp.src('path/to/example.js')
         .pipe(uglify())
         .pipe(gulp.dest('path/to/outputfile'));
});

/**
* 浏览器自动刷新
*/
gulp.task('serve', function() {
    browserSync.init({
        server: "./path/to/the/file/you/needto/reload"
    });

    // 需要监视的文件，若有改动便执行后面的task
    gulp.watch("app/*.js", ['webpack']);
    gulp.watch("app/jade/*.jade", ['jade']);
    gulp.watch(['./build/*.html', './build/css/*.css', './build/js/*.js']).on('change', reload);
});

/**
* 使用webpack
*/
gulp.task('webpack', function() {
    return gulp.src("app/index.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./build/js/"))
        .pipe(reload({
            stream: true
        }));
});

/**
* 组合任务
*/
gulp.task('default', ['serve']);
gulp.task('build', ['createcss', 'jade', 'webpack', 'posts']);
gulp.task('bd', ['build', 'deploy']);
