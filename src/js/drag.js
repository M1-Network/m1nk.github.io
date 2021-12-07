var gapX, startx

var drag = function (obj) {
  
  obj.bind("mousedown", start);

  function start(event) {
    if (event.button == 0) {

      gapX = event.clientX;

      startx = $('.roadMap-container').scrollLeft();  

     
      $(document).bind("mousemove", move);
      
      $(obj).bind("mouseup", stop);
    }
    return false;
  }

  function move(event) {
    var left = event.clientX - gapX; 

    $('.roadMap-container').scrollLeft(startx - left);
    return false;
  }

  function stop() {
    
    $(document).unbind("mousemove", move);
    $(obj).unbind("mouseup", stop);
  }

}
var obj = $(".roadMap-container");
drag(obj);