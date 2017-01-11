/**
 * modalBox 主要文件
 */
var modalBox = modalBox || (function() {
    // 保存已创建对话框的引用
    var dialogs = {};
    dialogs.mask = {
        show: function(options){
            var defaults = {};
            var opts = $.extend(true, {}, defaults, options || {});
            var $mask = $('<div class="modal-mask" />');
            $mask.css(opts);
            $('body').append($mask);
        },
        hide: function($dialogs){
            $dialogs.prev('.modal-mask').remove();
        }
    };
    dialogs.register = function(name,factory){
        dialogs[name] = factory;
    };
    return dialogs;
})();
