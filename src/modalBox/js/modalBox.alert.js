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
 modalBox.register('alert', function(title, msg, options){
     var _this = this,
        _title, _msg, _options;
     var defaults = {
         css: {
             okbtn: true,
             cancelbtn: false,
             okbtnText: '确定',
             cancelbtnText: '取消'
         },
         manul:true,
         iconClass: null,
         okbtn: function(){},
         cancelbtn: function(){},
         closebtn: function(){}
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
     if(!!opts.css.okbtn){
         $alert.append('<p class="j-btns"><span class="obtn obtn-primary alert-ok j-okbtn">'+opts.css.okbtnText+'</span>');
     }
     if(!!opts.css.cancelbtn){
         $alert.find('.j-btns').append('<span class="obtn obtn-default alert-cancel j-cancel">'+opts.css.cancelbtnText+'</span>')
     }
     if(!!opts.iconClass){
         $alert.find('.alert-content').before('<h5><i class="' + opts.iconClass + '"></i></h5>');
     }
     if(_title){
         $alert.find('.alert-content').before($('<h6></h6>').html(_title));
     }
     $alert.find('.alert-content').html(_msg)
         .end()
         .on('click','.j-close',function(){
             _this.mask.hide($alert);
             $alert.remove();
             opts.cancelbtn && opts.cancelbtn($alert);
         })
         .on('click','.j-okbtn',function(){
             !opts.manul && _this.mask.hide($alert);
             !opts.manul && $alert.remove();
             opts.okbtn && opts.okbtn($alert);
         });

     _this.mask.show();
     $('body').append($alert);
 });
