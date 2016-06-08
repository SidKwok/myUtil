/**
* @file some functions I may use in my projects
* @author Sid
*/

/**
* 判断是否函数
*
* @param {Object} obj 待检验的对象
* @return {Boolean} 返回是否校验成功
*/
function isFunction (obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
}

/**
* 判断是否电话号码
*
* @param {String} tel
* @return {Boolean} 返回是否校验成功
*/
function is_tel (tel) {
    if(!/^1((3\d)|(4[57])|(5\d)|(7\d)|(8\d))\d{8}$/.test(tel)){
        return false;
    }
    return true;
}

/**
* 判断是否email
*
* @param {String} email
* @return {Boolean} 返回是否校验成功
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
*
* @param {String} url
* @return {Boolean} 返回是否校验成功
*/
function is_url(url){
    var pattern_url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
    if(!pattern_url.test(url)){
        return false;
    }
    return true;
}

/**
* 判断是否为数字
*
* @param {number} num
* @return {Boolean} 返回是否校验成功
*/
function is_num (num) {
    if (!/^[1-9]\d*$/.test(num)) {
        return false;
    }
    return true;
}

/**
* 判断是否ie6
*
* @return {Boolean} 返回是否校验成功
*/
function is_ie6 () {
    return document.all && document.compatMode && !window.XMLHttpRequest;
}

/**
* 判断是否ie8
*
* @return {Boolean} 返回是否校验成功
*/
function is_ie8 () {
    return document.all && document.querySelector && !document.addEventListener;
}

/**
* 判断是否ie10
*
* @return {Boolean} 返回是否校验成功
*/
function is_ie10 () {
    return document.all && !window.atob;
}

/**
* 判断小于ie8
*
* @return {Boolean} 返回是否校验成功
*/
function is_lt_under_ie8 () {
    var browser=navigator.appName;
    var b_version=navigator.appVersion;
    var version=b_version.split(";");
    var trim_Version;
    if(version[1]){
        trim_Version=version[1].replace(/[ ]/g,"");
    }
    if (browser=="Microsoft Internet Explorer" && trim_Version=="MSIE5.0" || trim_Version=="MSIE6.0" || trim_Version=="MSIE7.0") {
        return true;
    }else {
        return false;
    }
}

/**
 * 设置Cookie
 *
 * @param {string} cName Cookie的key
 * @param {string} value Cookie的value
 * @param {number} expiredays Cookie的失效时间，天数
 */
 function setCookie (cName, value, expiredays) {
     var exdate = new Date();
     exdate.setDate(exdate.getDate() + expiredays);
     document.cookie = cName + '=' + escape(value) + ((expiredays == undefined) ? '' : ';expires=' + exdate.toUTCString());
 }

 /**
  * 获取Cookie
  *
  * @param {string} cName Cookie的key
  * @return {string} Cookie中对应Key的值
  */
 function getCookie (cName) {
     if(document.cookie.length > 0) {
         cStart = document.cookie.indexOf(cName + "=");
         if(cStart !== -1) {
         cStart = cStart + cName.length + 1;
         cEnd = document.cookie.indexOf(";", cStart);
         if(cEnd === -1) {
             cEnd = document.cookie.length;
         }
         return unescape(document.cookie.substring(cStart, cEnd));
         }
     }
     return '';
 }
