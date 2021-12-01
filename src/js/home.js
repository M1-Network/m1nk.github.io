
import '../css/home.less';
import $ from 'jquery';
import artTemplate from 'art-template/lib/template-web'
import './swiper.js'
import './video.js'
import './drag.js'

let featuresList = [
  {
    title: 'Installation Free',
    text: 'Users can play games without installing APP through the M1 project.',
    image: require('../images/icon-1.png')
  },
  {
    title: ' Low-Delay',
    text: 'M1 platform provides low latency rendering services for games, allowing users to play 3A games at top speed',
    image: require('../images/icon-2.png')
  },
  {
    title: 'Superior Quality',
    text: 'The M1 project provides game streaming service, so that the users could experience the 1080P ultra clear and high-quality game with more than 60 frames. At the same time, users can pay for mobile, PC and TV games through data channels.',
    image: require('../images/icon-3.png')
  },
  {
    title: 'Decentralization',
    text: 'M1 project realizes decentralized container management based on blockchain technology, and provides a convenient digital currency payment method for games',
    image: require('../images/icon-4.png')
  }
]

let advisorAndTeam = {
  team: {
    title: 'Team',
    list: [
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      }
    ]
  },
  advisors: {
    title: 'Advisors',
    list: [
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar-1.png')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.png')
      }
    ]
  }
}

let html = artTemplate('featuresTemp', featuresList);
document.getElementById('features-list').innerHTML = html;

let advisorsTemp = artTemplate('advisorsTemp', advisorAndTeam);
document.getElementById('advisorAndTeam').innerHTML = advisorsTemp;

// menu active class style
$('.menu-container').on('click', '.menu-list', function () {
  $(this).addClass("current").siblings().removeClass("current");
});

// 点击按钮 平滑滚动
$(".scroll").click(function (event) {

  event.preventDefault();

  //calculate destination place 

  var dest = 0;

  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {

    dest = $(document).height() - $(window).height();

  } else {

    dest = $(this.hash).offset().top;

  }

  //go to destination 

  $('html,body').animate({ scrollTop: dest }, 100, 'linear');


});

// 监听浏览器滚动 menu 的样式处理
function handleMenuActive(t, p, callback) {
  let top = $(t).offset().top
  let H = $(t).height()
  if(top - p < 100  && top - p > -H) {
    callback()
  }
}
let p = 0, t = 0;
$(window).scroll(function (event) {

  event.preventDefault();

  $('.menu-list').each(function(idx, $sec) {
    handleMenuActive(`.section-${idx+1}`, $(window).scrollTop(), function() {
      $($sec).addClass("current").siblings().removeClass("current");
    })
  })

  // p = $(this).scrollTop();

  // let ScrVal = $(window).scrollTop();

  // let McrVal = $(".section-1").offset().top

  // let Mhval = $(".menu").height()

  // if (ScrVal >= McrVal - Mhval) {
  //   if (t <= p) {
  //     //向下滚
  //     $('.menu').addClass('menu-fixed menu-translate-hide')

  //   } else {
  //     //向上滚
  //     $('.menu').removeClass('menu-translate-hide')
  //   }
  // } else {
  //   $('.menu').removeClass('menu-fixed')
  // }

  // setTimeout(function () { t = p; }, 0);

})

let dropState = false
$('.dropmenuOpen').click(function () {
  dropState = !dropState
  if(dropState) {
    $('.model').fadeIn()
  } else {
    $('.model').fadeOut()
  }
})

$('.scroll').click(function () {
  $('.model').fadeOut()
})

let a = false
$('.target').click(() => {
  a = !a
  if (a) {

    $('.target').addClass('target-rotateY')
    $('.a-2').css({
      "width": '62%',
      "opacity": 1
    })

    $('.a-1').css({
      "width": '32%',
      "opacity": 0.4
    })
  } else {
    $('.target').removeClass('target-rotateY')

    $('.a-1').css({
      "width": '62%',
      "opacity": 1
    })

    $('.a-2').css({
      "width": '32%',
      "opacity": 0.4
    })

  }

})


$('.content-list').click(function () {
  $('.content-list').removeClass('current')
  $(this).addClass("current")
})

$('.email-btn').click(() => {
  // $("head").append("<script src='http://81.70.97.21/report?callback=11'><\/script>");
})

