window.onload = function(){
    var owrapper = document.getElementById('wrapper');
    var oImg = document.getElementsByTagName('img');
    var deg = 360/oImg.length;
    var nowX,nowY,
        lastX,lastY,
        minusX,minusY,
        roX = -35,roY = 0;
    /* var timer = null; */
        (function(i){
            for(;i<oImg.length;i++){
            oImg[i].style.transform = "rotateY("+i*deg+"deg) translateZ(500px)";
            oImg[i].style.transition = "transform 2s linear "+i*0.2+"s";
            owrapper.style.animation = ""
        }
        })(0);
        document.onmousedown = function(e){
                var e = e||window.event;
                lastX = e.clientX;
                lastY = e.clientY;
                owrapper.style.animation = "rotate 20s linear 5s infinite paused";
            this.onmousemove = function(e){
                var e = e||window.event;
                nowX = e.clientX;
                nowY = e.clientY;
                minusX = nowX-lastX;
                minusY = nowY-lastY;
                roX +=minusY;
                roY +=minusX;
                owrapper.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
                lastX = nowX;
                lastY = nowY;
            }
            this.onmouseup = function(){
                owrapper.style.animation = "rotate 20s linear 5s infinite running";
                this.onmousemove = null;
                this.onmouseup = '';
               timer = setInterval(function(){
                    minusX *=0.95;
                    minusY *=0.95;
                    roX +=minusY*0.2;
                    roY +=minusX*0.1;
                    owrapper.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
                    if(minusX < 0.1||minusY < 0.1){
                        clearInterval(timer);
                    }
                },1000/60)

            }
        }



}