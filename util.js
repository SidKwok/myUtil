/**
* @file some functions I may use in my projects
* @author Sid
*/

/**
* 判断是否函数
* @param {Object} obj 待检验的对象
*/
function isFunction (obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
}

/**
* 判断是否电话号码
* @param {String} tel
*/
function is_tel (tel) {
    if(!/^1((3\d)|(4[57])|(5\d)|(7\d)|(8\d))\d{8}$/.test(tel)){
        return false;
    }
    return true;
}

/**
* 判断是否email
* @param {String} email
*/
function is_email(email){
    var pattern_email = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*(\.[a-zA-Z]+)$/;
    if(!pattern_email.test(email)){
        return false;
    }
    return true;
}

/**
* 判断是否url
* @param {String} url
*/
function is_url(url){
    //https://gist.github.com/dperini/729294
    var pattern_url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
    if(!pattern_url.test(url)){
        return false;
    }
    return true;
}
