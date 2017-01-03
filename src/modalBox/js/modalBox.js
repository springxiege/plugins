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
    dialogs.alert = function(msg,options){
        var _this = this;
        var defaults = {
            css: {},
            manul:true,
            iconClass: null,
            okbtn: function(){},
            cancelbtn: function(){}
        };
        var opts = $.extend(true, {}, defaults, options || {});
        var $alert = $('<div class="modal-alert"><span class="alert-close j-close">&times;</span><div class="alert-content"></div></div>');
        $alert.close = function(){
            _this.mask.hide($alert);
            $alert.remove();
        };
        if(!$.isEmptyObject(opts.css)){
            $alert.css(opts.css);
        }
        if(!!opts.okbtn){
            $alert.append('<p><span class="btn btn-primary alert-ok j-okbtn">确定</span>');
        }
        if(!!opts.iconClass){
            $alert.find('.alert-content').before('<h6><i class="' + opts.iconClass + '"></i></h6>');
        }
        $alert.find('.alert-content').html(msg)
            .end()
            .on('click','.j-close',function(){
                _this.mask.hide($alert);
                $alert.remove();
                opts.okbtn && opts.cancelbtn($alert);
            })
            .on('click','.j-okbtn',function(){
                !opts.manul && _this.mask.hide($alert);
                !opts.manul && $alert.remove();
                opts.okbtn && opts.okbtn($alert);
            })
        _this.mask.show();
        $('body').append($alert);

    };
    dialogs.confirm = function(){
        return {};
    };
    dialogs.info = function(){
        return {};
    };
    return dialogs;
})();
