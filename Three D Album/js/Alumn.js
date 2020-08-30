        window.onload = function() {
                var oWrapper = document.getElementById('wrapper');
                var oImg = document.getElementsByTagName('img');
                var deg = 360/oImg.length;
                var roY = 0,roX = -16,
                    nowX,nowY,
                    lastX,lastY,
                    minusX,minusY;  
                var timer = null;
                
                
                

                Array.prototype.forEach.call(oImg,function(e,index){
                        e.style.transform = "rotateY("+deg*index+"deg) translateZ(500px)";
                        e.style.transition = "transform 1s "+index*0.1+"s";
                       /*  console.log(e); */
                })  

                    document.onmousedown = function(ev){
                            oWrapper.style.animation =" rotate 20s linear 30s infinite paused" ;
                            var ev = ev||window.event;
                            lastY =ev.clientY;
                            lastX = ev.clientX;
                            /* console.log(ev); */
                    this.onmousemove = function(ev){
                        var ev = ev||window.event;
                        nowX = ev.clientX;
                        nowY = ev.clientY;
                        minusX = nowX-lastX;
                        minusY = nowY-lastY;
                        roX += minusY*0.2;
                        roY -= minusX*0.1;
                        oWrapper.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
                        lastX = nowX;
                        lastY = nowY;
                    }
                    this.onmouseup = function(){
                        this.onmousemove = null;
                        this.onmouseup = null;
                        oWrapper.style.animation =" rotate 20s linear 2s infinite running" ;
                        timer= setInterval(function(){
                            minusX *=0.95;
                            minusY *=0.95;
                            roX += minusY*0.2
                            roY -= minusX*0.1;
                            oWrapper.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
                            if(Math.abs(minusX) < 0.1||Math.abs(minusY) < 0.1){
                                clearInterval(timer);
                            }
                        },1000/60)   

                    }
                }
        
                
        }