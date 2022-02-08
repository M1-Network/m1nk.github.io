
let player;

$(document).ready(function () {
  onYouTubeIframeAPIReady()
})


$(".scroll").click(function (event) {
  let target = event.currentTarget.innerHTML

  if(target === 'M1') player.playVideo()
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