/**
 * modalBox的confirm方法
 */
modalBox.register('confirm', function(title, msg, options){
    var _this = this,
        _title, _msg, _options;
    var defaults = {
        css: {},
        manul: true,
        iconClass: null,
        okbtn: function(){},
        cancelbtn: function(){}
    };
    if($.isPlainObject(msg)){
        _options = msg;
        _msg = title;
    }else {
        _title = title;
        _msg = msg;
        _options = options;
    };
    var opts = $.extend(true, {}, defaults, _options || {});
})
