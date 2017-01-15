/**
 * modalBox的alert方法
 */
/**
 * [alert 模拟window.alert方法]
 * @param [title,msg,options]
 * @author Heiyu
 * @createAt 2017/01/11
 * @type {[type]}
 */
 modalBox.register('show', function(title, msg, options){
     var _this = this,
        _title, _msg, _options;
     var defaults = {
         css: {
            //  width: 300, // 默认宽度，可调用时配置
            //  height: 180,  // 默认高度，可调用时配置
            //  iconClass: null,  // 默认无小图标，如果要有小图标则传入对应的class名，自己设置css样式
         },
         btns:{
             okbtn: true,  // 默认显示确定按钮
             cancelbtn: true,  // 默认显示取消按钮
             okbtnText: '确定',  // 默认显示确定按钮的内容，可自定义
             cancelbtnText: '取消',  // 默认显示取消按钮的内容，可自定义
             btnIcon: false,  // 按钮是否带有小图标，默认无，为true则显示小图标
         },
         manul: false,  // 手动关闭弹窗模式，默认为false即点击确定、取消、关闭按钮后自行关闭自身弹窗
         ok: function(){},  // 确定按钮的回调函数
         cancel: function(){},  // 取消按钮的回调函数
         close: null,  // 关闭按钮的回调函数，默认为null时执行的函数即cancel按钮的回调函数否则执行自己的回调函数
     };
     if($.isPlainObject(msg)){
         _options = msg;
         _msg = title;
     }else {
         _title = title;
         _msg = msg;
         _options = options;
     }
     var opts = $.extend(true, {}, defaults, _options || {});
     var $alert = $('<div class="modal-alert"><span class="alert-close j-close">&times;</span><div class="alert-content"></div></div>');
     $alert.close = function(){
         _this.mask.hide($alert);
         $alert.remove();
     };
     if(!$.isEmptyObject(opts.css)){
         $alert.css(opts.css);
         if(opts.css.width){
             $alert.css('margin-left', -opts.css.width/2 + 'px')
         }
         if(opts.css.height){
             $alert.css('margin-top', -opts.css.height/2 + 'px')
         }
     }
     if(!!opts.btns.okbtn){
         $alert.append('<p class="j-btns"><span class="obtn obtn-primary alert-ok j-okbtn">'+ (opts.btns.btnIcon ? '<i class="obtn-icon-ok"></i>':'')+opts.btns.okbtnText+'</span>');
     }
     if(!!opts.btns.cancelbtn){
         $alert.find('.j-btns').append('<span class="obtn obtn-default alert-cancel j-cancel">'+(opts.btns.btnIcon ? '<i class="obtn-icon-cancel"></i>':'')+opts.btns.cancelbtnText+'</span>')
     }
     if(!!opts.css.iconClass){
         $alert.find('.alert-content').before('<h5><i class="' + opts.iconClass + '"></i></h5>');
     }
     if(_title){
         $alert.find('.alert-content').before($('<h6/>').html(_title));
     }
     $alert.find('.alert-content').html(_msg)
         .end()
         .on('click','.j-close',function(){
             _this.mask.hide($alert);
             $alert.remove();
             if(opts.close){
                 opts.close($alert);
             }else {
                 opts.cancel && opts.cancel($alert);
             }
         })
         .on('click', '.j-cancel', function(event) {
             !opts.manul && _this.mask.hide($alert);
             !opts.manul && $alert.remove();
             opts.cancel && opts.cancel($alert);
         })
         .on('click','.j-okbtn',function(){
             !opts.manul && _this.mask.hide($alert);
             !opts.manul && $alert.remove();
             opts.ok && opts.ok($alert);
         });

     _this.mask.show();
     $('body').append($alert);
 });
