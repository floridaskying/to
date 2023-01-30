var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    removeHandler: function (element, type, handler) {
        if(element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if(element.detachEvent)
            element.detachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    /**
     * 监听触摸的方向
     * @param target            要绑定监听的目标元素
     * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
     * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
     * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
     * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
     * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
     */
    listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
        this.addHandler(target, "touchstart", handleTouchEvent);
        this.addHandler(target, "touchend", handleTouchEvent);
        this.addHandler(target, "touchmove", handleTouchEvent);
        var startX;
        var startY;
        function handleTouchEvent(event) {
            switch (event.type){
                case "touchstart":
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    break;
                case "touchend":
                    var spanX = event.changedTouches[0].pageX - startX;
                    var spanY = event.changedTouches[0].pageY - startY;
                    //test                    
                    // console.log("startX:", startX);//[old] X
                    // console.log("startY:", startY);//[old] Y
                    // console.log("event.touches[0].pageX:", event.changedTouches[0].pageX);//[now] X
                    // console.log("event.touches[0].pageY:", event.changedTouches[0].pageY);//[now] Y
                    // console.log("spanX:", spanX);//[span] X
                    // console.log("spanY:", spanY);//[span] X

                    if(Math.abs(spanX) > Math.abs(spanY)){      //认定为水平方向滑动
                        if(spanX > 0){         //向右
                            if(rightCallback)
                                rightCallback();
                        } else if(spanX < -0){ //向左
                            if(leftCallback)
                                leftCallback();
                        }
                    } else {                                    //认定为垂直方向滑动
                        if(spanY > 0){         //向下
                            if(downCallback)
                                downCallback();
                        } else if (spanY < -0) {//向上
                            if(upCallback)
                                upCallback();
                        }
                    }

                    break;
                // case "touchmove":
                //     //阻止默认行为
                //     if(isPreventDefault)
                //         event.preventDefault();
                //     break;
            }
        }
    }
};
	var top1 = 0;
        function stopBodyScroll(isFixed) {
            var bodyEl = document.body
            if (isFixed) {
                top1 = window.scrollY
                bodyEl.style.position = 'fixed'
                bodyEl.style.top = -top1 + 'px'
            }else{
                bodyEl.style.position = ''
                bodyEl.style.top = ''
                window.scrollTo(0, top1) // 回到原先的top
            }
        }
    counting_down=0;
	var lines = '<div class="layui-layer-shade" id="layui-layer-shade1" times="1" style="z-index:19891014; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>\
<div class="layui-layer layui-layer-dialog layui-layer-molv layer-anim" id="layui-layer1" type="dialog" times="1" showtime="0" contype="string" style="z-index: 19891015; width: 400px; height: 400px; top: 165.5px; left: 505.5px;">\
<div class="layui-layer-title" style="">继续浏览请对下暗号</div>\
<div id="" class="layui-layer-content" style="height: 358px;">\
<span style="color:darkgray">声明:</span>\
<span style="color:green">&nbsp;本验证程序由第三方服务商提供技术实现。</span>\
<p style="font-size:12px">\
</p>\
\
兄弟，是程序员或IT领域的小伙伴吗？对一下暗号：验证码<br>\
你接：<input type="text" id="verify_value" class="verify_value" style="width: 150px;">&nbsp;&nbsp;\
<button type="button" id="verify_button" class="btn btn-success verify_submit">对接</button><br>\
获取暗号请用微信扫描下图二维码或者搜索公众号：腾英,关注公众号, 回复验证码就能知道暗号啦~<br>\
<img src="https://static.tinymind.net.cn/verify_code.jpg" alt="" width="150" height="150">\
<div class="anhao_msg"></div>\
</div>\
<span class="layui-layer-setwin"></span>\
</div>\
';
	var phone_lines = '<div class="layui-layer-shade" id="layui-layer-shade1" times="1" style="z-index:19891014; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>\
<div class="layui-layer layui-layer-dialog layui-layer-molv layer-anim" id="layui-layer1" type="dialog" times="1" showtime="0" contype="string" style="z-index: 19891015; width: '+(screen.width-30)+'px; height: 400px; top: 165.5px; left: 10px;">\
<div class="layui-layer-title" style="">继续浏览请对下暗号</div>\
<div id="" class="layui-layer-content" style="height: 358px;">\
<span style="color:darkgray">声明:</span>\
<span style="color:green">&nbsp;本验证程序由第三方服务商提供技术实现。</span>\
<p style="font-size:12px">\
</p>\
\
兄弟，是程序员或IT领域的小伙伴吗？对一下暗号：验证码<br>\
你接：<input type="text" id="verify_value" class="verify_value" style="width: 150px;">&nbsp;&nbsp;\
<button type="button" id="verify_button" class="btn btn-success verify_submit">对接</button><br>\
<img src="https://static.tinymind.net.cn/verify_code.jpg" alt="" width="150" height="150">\
<div class="anhao_msg"></div>\
1、长按保存二维码至手机相册;<br />\
2、打开微信APP，使用扫一扫，扫描识别相册中保存的二维码、或者搜索公众号：腾英；<br />关注公众号, 回复验证码就能知道暗号啦~<br>\
</div>\
<span class="layui-layer-setwin"></span>\
</div>\
';
	var verify_flag=0;
	var verify_reset= function(){
	var input_verify_value = document.getElementById("verify_value").value;
	console.log(input_verify_value);
	if(input_verify_value=="769829"){
			document.getElementById("verify").innerHTML = "";
			stopBodyScroll(false);
			document.body.parentNode.style.overflowY="";
			}else{
			document.getElementById("verify_value").value = "";
			}
		}
    var scrollFunc = function (e) {  
        e = e || window.event;
		if(counting_down>=3){
			if(verify_flag==0){
                document.body.parentNode.style.overflowY="";
				document.getElementById("verify").innerHTML = lines;
				verify_flag=1;
				if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {}else{
					stopBodyScroll(true);
					$('body').css({'position':'fixed',"width":"100%"});
				}
				}else{
				//
				}
		}
        //先判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta) {         
            if (e.wheelDelta > 0) { 
               console.log("up");  
			   //alert("滑轮向上滚动");
            }  
            if (e.wheelDelta < 0) { 
			   if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {document.body.parentNode.style.overflowY="";stopBodyScroll(false);
			   }else{
				   console.log("down"); 
				   
				   counting_down+=1;
				   console.log(counting_down);  
				   //alert("滑轮向下滚动");
			   }
            }  
        //Firefox滑轮事件   
        } else if (e.detail) { 
            if (e.detail> 0) { 
			   if (/Mobi|Android|iPhone/i.test(navigator.userAgent)){document.body.parentNode.style.overflowY="";stopBodyScroll(false);
			   }else{
				   console.log("down");  
				   counting_down+=1;
				   console.log(counting_down);  
				   
			   }
            }  
            if (e.detail< 0) { 
                 console.log("up");  
            }  
        }  
    }
	//if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {document.body.parentNode.style.overflowY="";}
    //给页面绑定滑轮滚动事件 
	
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
		document.addEventListener("click", verify_reset);
    }  
    window.onmousewheel = document.onmousewheel = scrollFunc;	

phone_action_counting=0;
phone_verify_flag=0;
function phone_verify(){
	if(phone_action_counting>=1){
		//
		if(phone_verify_flag==0){
                document.body.parentNode.style.overflowY="";
				document.getElementById("verify").innerHTML = phone_lines;
				phone_verify_flag=1;
				if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
					stopBodyScroll(true);
					$('body').css({'position':'fixed',"width":"100%"});
				}else{}
				}else{
				//
				}
	}
}
function up(){console.log("action:up");phone_action_counting+=1;phone_verify();}
function right(){console.log("action:right");phone_action_counting+=1;phone_verify();}
function down(){console.log("action:down");phone_action_counting+=1;phone_verify();}
function left(){console.log("action:left");phone_action_counting+=1;phone_verify();}
EventUtil.listenTouchDirection(document, true, up, right, down, left)