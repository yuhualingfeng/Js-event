/**
 * Created by Administrator on 2015/10/9.
 */

/*
 * event�������Ժͷ���:
 * type �¼�����
 * target �¼�Ŀ��
 * currentTarget ��ǰ�¼�Ŀ��
 * preventDefault() ��ֹĬ����Ϊ
 * stopPropagation() ��ֹ�¼�ð�ݺͲ���
 *
 * IE��event���������
 * cancelBubble Ϊtrueʱ,ȡ���¼�ð��
 * returnValue Ϊfalseʱ,��ֹĬ����Ϊ
 * srcElement ��ǰ�¼�Ŀ��
 * type �¼�����
 * */

/*
 * onclick this����֧��
 * html�¼�������� this����֧��
 * addEventListener this����֧��
 * attachEvent thisָ��window
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