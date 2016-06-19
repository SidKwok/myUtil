/**
* @file fis2的配置文件
* @author sid
*/

fis.config.set({
    project: {
        charset : 'gbk',                 // 产出文件的编码
        md5Length : 7,                   // md5的长度
        md5Connector: '_',               // 与md5连接的字符
        include: 'src/**',               // 只有命中include里面的东西才会被视为源码，其他则忽略
        exclude: ['dist/**', 'test/**'], // 除去include里面的某些文件
    }
});
