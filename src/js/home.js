
import '../css/home.less';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import artTemplate from 'art-template/lib/template-web'

let featuresList = [
  {
    title: 'Installation Free',
    text: 'Any game distributed in M1 project can not only provide distribution efficiency, but also players can experience the game without installation',
    image: require('../images/avatar.jpeg')
  },
  {
    title: ' Low-Delay',
    text: 'M1 platform provides low latency rendering services for games, allowing users to play 3A games at top speed',
    image: require('../images/avatar.jpeg')
  },
  {
    title: 'Superior Quality',
    text: 'The M1 project would stream the game, so that the users could experience the 1080P ultra clear and high-quality game with more than 60 frames. At the same time, the users could pay the money to the PC Mobile TV and distribute it to the other end of the line',
    image: require('../images/avatar.jpeg')
  },
  {
    title: 'Decentralization',
    text: 'M1 project realizes decentralized container management based on blockchain technology, and provides a convenient digital currency payment method for games',
    image: require('../images/avatar.jpeg')
  }
]

let advisorAndTeam = {
  team: {
    title: 'Team',
    list: [
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      }
    ]
  },
  advisors: {
    title: 'Advisors',
    list: [
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      },
      {
        title: 'loewion',
        text: 'University of Oxford',
        image: require('../images/avatar.jpeg')
      }
    ]
  }
}

let html = artTemplate('featuresTemp', featuresList);
document.getElementById('features-list').innerHTML = html;

let advisorsTemp = artTemplate('advisorsTemp', advisorAndTeam);
document.getElementById('advisorAndTeam').innerHTML = advisorsTemp;


// 监听浏览器滚动 menu 的样式处理
let p = 0, t = 0;
$(window).scroll(function (event) {

  event.preventDefault();

  p = $(this).scrollTop();

  let ScrVal = $(window).scrollTop();

  let McrVal = $(".section-1").offset().top

  let Mhval = $(".menu").height()

  if (ScrVal >= McrVal - Mhval) {
    if (t <= p) {
      //向下滚
      $('.menu').addClass('menu-fixed menu-translate-hide')

    } else {
      //向上滚
      $('.menu').removeClass('menu-translate-hide')
    }
  } else {
    $('.menu').removeClass('menu-fixed')
  }

  setTimeout(function () { t = p; }, 0);

})

$('.dropmenuOpen').click(function() {
  $('.model').fadeIn()
})

$('.close-btn').click(function() {
  $('.model').fadeOut()
})

$('.scroll').click(function() {
  $('.model').fadeOut()
})