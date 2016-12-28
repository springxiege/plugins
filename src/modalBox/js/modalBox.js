/**
 * modalBox 主要文件
 */
var modalBox = modalBox || function() {
    // 保存已创建对话框的引用
    var dialogs = {};
    /**
     * [extend 扩展属性]
     * @method extend
     * @param  {[type]} base [初始属性]
     * @param  {[type]} sub  [扩展属性]
     * @return {[type]}      [Object]
     */
    var extend = function(base, sub){
        for (var prop in sub) {
            if (base.hasOwnProperty(prop)) {
                base[prop] = sub[prop];
            }
        }
        return base;
    };

    dialogs.alert = function(){
        return {
            type: 'alert'
        };
    };
    dialogs.confirm = function(){
        return {};
    };
    dialogs.info = function(){
        return {};
    };
    return dialogs;
};
