window.onload = function(){
    var cubeBox = document.getElementById('cubeBox');
    var nowX,nowY,
        lastX,lastY,
        minusX,minusY,
        roX = 0,roY = 0;
    document.onmousedown = function(e){
            var e = e||window.event;
            lastX = e.clientX;
            lastY = e.clientY;
        this.onmousemove = function(ev){
            var ev = ev||window.event;
            nowX = ev.clientX;
            nowY = ev.clientY;
            minusX = nowX-lastX;
            minusY = nowY-lastY;
            roX += minusY;
            roY += minusX;
            cubeBox.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
            lastX = nowX;
            lastY = nowY;
        }
        this.onmouseup = function(){
            this.onmousemove = '';
        }
    }
}