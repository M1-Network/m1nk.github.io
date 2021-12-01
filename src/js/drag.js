var gapX, startx

var drag = function (obj) {
  
  obj.bind("mousedown", start);

  function start(event) {
    if (event.button == 0) {//判断是否点击鼠标左键  

      gapX = event.clientX;

      startx = $('.roadMap-container').scrollLeft();  // scroll的初始位置

      //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的  
      $(document).bind("mousemove", move);
      //此处的$(document)可以改为obj  
      $(obj).bind("mouseup", stop);
    }
    return false;//阻止默认事件或冒泡  
  }

  function move(event) {
    var left = event.clientX - gapX; // 鼠标移动的相对距离

    $('.roadMap-container').scrollLeft(startx - left);
    return false;//阻止默认事件或冒泡  
  }

  function stop() {
    //解绑定，这一步很必要，前面有解释  
    $(document).unbind("mousemove", move);
    $(obj).unbind("mouseup", stop);
  }

}
var obj = $(".roadMap-container");
drag(obj);//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数