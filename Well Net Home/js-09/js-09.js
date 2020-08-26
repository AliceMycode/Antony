    window.onload = function(){

        /* 获取id名 */
        function $(id) {
            return typeof id ==='string' ? document.getElementById(id) : null;
        }
        /* 获取标签名定义为全局变量 */
        var circle = document.getElementById('round').getElementsByTagName('span');
        var count = 1;
        var timer;
        /* 鼠标移过弹出二维码，离开隐藏二维码 */
        function display(P,name) {

            $(P).onmouseover = function(){
                $(name).style.display = 'block';
            }
            $(P).onmouseout = function(){
                $(name).style.display = 'none';
            }
        }
        display('Wechat-P','Wechat'); 
        display('QQ-P','QQ');
        display('Weibo-P','Weibo');
        display('github-P','github');   


        function play(){
             timer = setInterval(() => {
            change()
        }, 1500);
        }
        play(); /* 默认加载完页面后自动切换图片 */

        /* 每1.5秒切换下一张图片 */
        function change(){
            $('pic').src = "img-09/banner"+count+".jpg";
            for(var i= 0;i<circle.length;i++){
                if(circle[i].className =='current'){
                    circle[i].className = '';
                }
            }
            circle[count-1].className = 'current';
            count++;
            if(count > 5){
                count = 1;
            }
        }

        /* 上一张 */
        $('left_botton').onclick = function(){
            count--;
            if(count<1){
                count = 5;
            }
            for(var i= 0;i<circle.length;i++){
                if(circle[i].className =='current'){
                    circle[i].className = '';
                }
            }
            circle[count-1].className = 'current';
            $('pic').src = "img-09/banner"+count+".jpg";
        }


        /* 下一张 */
        $('right_botton').onclick = function(){
            count++;
            if(count>5){
                count = 1;
            }
            for(var i= 0;i<circle.length;i++){
                if(circle[i].className =='current'){
                    circle[i].className = '';
                }
            }
            circle[count-1].className = 'current';
            $('pic').src = "img-09/banner"+count+".jpg";
        }

            /* 鼠标移过清除定时器 */
        $('pic').onmouseover = function(){
            clearInterval(timer);
        
        }

        /* 鼠标离开开启定时器 */
        $('pic').onmouseout = function(){
            play();
        }

        /* 点击每个小圆点跳到相应的图片 */
        for(var i = 0;i<circle.length;i++){
                circle[i].onclick = function(){
                var index = parseInt(this.getAttribute('index'));
                $('pic').src = "img-09/banner"+index+".jpg";
            }
        }


    }
