
let player;

$(document).ready(function () {

  loadScript(function () {
    onYouTubeIframeAPIReady()
  })

})

function loadScript(callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "complete" || script.readyState == "loaded") {
        // 回调加载的js方法  加载完成
        callback();
      }
    }
  } else {
    script.onload = function () {
      // 回调加载的js方法  加载完成
      callback();
    }

  }
  script.src = 'https://www.youtube.com/iframe_api'; //确保事件绑定完毕之后再去加载触发事件回调
  document.head.appendChild(script);
}

$(".scroll").click(function (event) {
  let target = event.currentTarget.innerHTML

  if (target === 'M1') player.playVideo()
})



function onYouTubeIframeAPIReady() {
  window.YT.ready(function () {
    player = new window.YT.Player('videoplayer', {
      height: '250',
      width: '417',
      videoId: '08-5p_9ExvA',
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  })
}

function onPlayerReady(event) {
  //   event.target.playVideo()
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}