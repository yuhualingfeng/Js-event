/**
 * Created by Administrator on 2015/10/9.
 */

/*
 * event对象属性和方法:
 * type 事件类型
 * target 事件目标
 * currentTarget 当前事件目标
 * preventDefault() 阻止默认行为
 * stopPropagation() 阻止事件冒泡和捕获
 *
 * IE中event对象的属性
 * cancelBubble 为true时,取消事件冒泡
 * returnValue 为false时,阻止默认行为
 * srcElement 当前事件目标
 * type 事件类型
 * */

/*
 * onclick this完美支持
 * html事件处理程序 this完美支持
 * addEventListener this完美支持
 * attachEvent this指向window
 * */


var EventUtil = {
    addEventHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }
        else if(element.attachEvent) {
            element.attachEvent('on'+type,handler);
        }
        else{
            element['on'+type]=handler;
        }
    },
    removeEventHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }
        else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }
        else{
            element['on'+type]=null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation)
        {
            event.stopPropagation();
        }
        else{
            event.cancelBubble=true;
        }
    }

};