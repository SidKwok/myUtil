/**
* @file some useful functions with jQuery
* @author Sid
*/

/**
* 回到顶部
*
* @param {Selector} jQuery 对象
* @param {String} top 回到的位置
* @param {number} time 所需要的时间
*
* 示例：
* goTopEvent($('#goTop'), '0px', 500);
*/
function goTopEvent (selector, top, time) {
    selector.on('click', function(){
        $("html,body").animate({scrollTop: top}, time);
    });
}
