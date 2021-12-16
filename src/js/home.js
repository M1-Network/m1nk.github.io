
import '../css/home.less';
import $ from 'jquery';
import artTemplate from 'art-template/lib/template-web'
import './swiper.js'
import './video.js'
import './drag.js'

let featuresList = [
  {
    title: 'High Efficiency',
    text: 'M1 Network Project is committed to helping any blockchain establish its own metaverse ecology, allowing meta-universe players to quickly enter your metaverse civilization. M1 Network Project provides metaverse players with an interactive video channel that can be connected to metaverse through edge cloud rendering, and provides a basic metaverse ecology for blockchain projects, realizing the rapid development of the blockchain ecology.',
    image: require('../images/Efficiency_icon.png')
  },
  {
    title: 'Installation Free',
    text: 'M1 Network Project provides containers for metaverse developers to deploy services. The interaction between the player and the service is realized through an interactive video stream. Therefore, metaverse players can enjoy services without installing any clients. Therefore, M1 Network Project provides free installation for any metaverse.',
    image: require('../images/icon-1.png')
  },
  {
    title: 'Low Delay',
    text: "M1 Network Project manages metaverse containers through a huge network. When a metaverse player starts to play the metaverse, we will choose the nearest service node to provide the player with the metaverse rendering service. The metaverse player's operation and interaction with the metaverse can be controlled within 30ms. We provide low-latency metaverse services.",
    image: require('../images/icon-2.png')
  },
  {
    title: 'Superior Quality',
    text: "M1 Network Project mainly realizes metaverse experience and interaction through interactive video streams. M1 Network Project can provide users with 720P, 1080P and 4K resolutions, and can provide different experience versions of 30FPS, 60FPS, 90FPS and 120FPS.",
    image: require('../images/icon-3.png')
  },
  {
    title: 'Decentralization',
    text: "M1 Network Project adopts decentralized management. M1 Network Project Container adopts P2P network to manage the edge scheduling of users and metaverse. Users contribute their own computing power to serve many other metaverse users. Combined with P2P scheduling capabilities, it achieves decentralized management of containers. M1 Network Project Token records transactions between containers and users based on blockchain technology.",
    image: require('../images/icon-4.png')
  },
  {
    title: 'High Fusion',
    text: "M1 Network Project is committed to providing users and metaverse developers with a service to develop and connect to the metaverse. It provides basic visualization and interactive services for every metaverse. Through this service, metaverse developers can easily make their own metaverse ecology develop rapidly, make users try all metaverse services without a specific device.",
    image: require('../images/Fusion_icon.png')
  }
]

let advisorAndTeam = {
  team: {
    title: 'Team',
    list: [
      {
        title: 'Jeff.wu',
        text: 'Ten years working experience in Bigdata and AI',
        image: require('../images/avatar1.png')
      },
      {
        title: 'rich',
        text: 'Ten years working experience in Cloud game platform',
        image: require('../images/avatar2.png')
      },
      {
        title: 'loewion',
        text: 'Nine years working experience in Top Video platform',
        image: require('../images/avatar3.png')
      },
      {
        title: 'davkeor',
        text: 'Ten years working experience in Smart Hardware',
        image: require('../images/avatar4.png')
      }
    ]
  },
  advisors: {
    title: 'Advisors',
    list: [
      {
        title: 'Erik Hoving',
        text: 'More than 30 years work experience in telecommunications and consulting industries, senior advisor of Monitor Deloitte, member of the supervisory board of myTomorows, former group CTO of KPN, former CEO of Zenitel.',
        image: require('../images/Eriks.jpg')
      },
      {
        title: 'Thorsten Dirks',
        text: '14 years work experience in telecommunications and aviation industries，founder of OIH-One GmbH, former CEO of Eurowings and board member of Lufthansa，former CEO of Telefónica Germany, former CEO of E-Plus Group.',
        image: require('../images/ThorstenDirks.jpg')
      }
    ]
  }
}

let roadMapList = {
  top: [
    {
      label: '2021 Q1',
      info: 'M1 Network Project officially launched based on cloud rendering.'
    },
    {
      label: '2021 Q2',
      info: 'M1 Network Project provided cloud rendering services for many game services.'
    },
    {
      label: '2021 Q3',
      info: 'M1 Network Project built the first decentralized cloud rendering service based on blockchain technology.'
    },
    {
      label: '2021 Q4',
      info: 'M1 Network Project provided rendering services for many blockchain games and complete seed round financing.'
    }
  ],
  bot: [
    {
      label: '2022 Q1',
      info: 'M1 Network Project publishes the M1 Network Project white paper for metaverse users.'
    },
    {
      label: '2022 Q2',
      info: 'M1 Network Project releases a decentralized rendering container for metaverse users.'
    },
    {
      label: '2022 Q3',
      info: 'M1 Network Project issues M1 Network Project tokens for blockchain users.'
    },
    {
      label: '2022 Q4',
      info: 'M1 Network Project provides decentralized cloud rendering services for all metaverse service developers.'
    }
  ]
}
// features
let html = artTemplate('featuresTemp', featuresList);
document.getElementById('features-list').innerHTML = html;

// advisorsTeam
let advisorsTemp = artTemplate('advisorsTemp', advisorAndTeam);
document.getElementById('advisorAndTeam').innerHTML = advisorsTemp;

// roadMap
let roadMapListTemp = artTemplate('roadMapListTemp', roadMapList);
document.getElementById('roadMapList').innerHTML = roadMapListTemp;

// menu active class style
$('.menu-container').on('click', '.menu-list', function () {
  $(this).addClass("current").siblings().removeClass("current");
});

$(".scroll").click(function (event) {

  event.preventDefault();
  $('.model').fadeOut()
  //calculate destination place 

  var dest = 0;

  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {

    dest = $(document).height() - $(window).height();

  } else {

    dest = $(this.hash).offset().top;

  }

  //go to destination 

  $('html,body').animate({ scrollTop: dest }, 200, 'linear');


});

// watch menu scroll
function handleMenuActive(t, p, callback) {
  let top = $(t).offset().top
  let H = $(t).height()
  if (top - p < 100 && top - p > -H) {
    callback()
  }
}
let p = 0, t = 0;
$(window).scroll(function (event) {

  event.preventDefault();

  $('.menu-list').each(function (idx, $sec) {
    handleMenuActive(`.section-${idx + 1}`, $(window).scrollTop(), function () {
      $($sec).addClass("current").siblings().removeClass("current");
    })
  })

  p = $(this).scrollTop();

  let ScrVal = $(window).scrollTop();

  let McrVal = $(".section-1").offset().top

  let Mhval = $(".menu-box").height()

  if (ScrVal >= McrVal - Mhval) {
    if (t <= p) {
      // bottom
      $('.menu-box').addClass('menu-translate-hide')

    } else {
      // top
      $('.menu-box').removeClass('menu-translate-hide')
    }
  }

  t = p
  // setTimeout(function () { t = p; }, 0);

})

let dropState = false
$('.dropmenuOpen').click(function () {
  dropState = !dropState
  if (dropState) {
    $('.model').fadeIn()
  } else {
    $('.model').fadeOut()
  }
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

$('.email-btn').click((e) => {
  let value = $(e.currentTarget).prev()[0].value
  let myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
  if (value) {
    if (myReg.test(value)) {
      $(e.currentTarget).prev().removeClass('email-error')
      $("head").append(`<script src='http://81.70.97.21/report?email=${value}'><\/script>`);
      $.ajax({
        url: `http://81.70.97.21/report?email=${value}`,
        type: "GET",
        dataType: "jsonp"
      });
      $(e.currentTarget).prev()[0].value = ''
    } else {
      $(e.currentTarget).prev().addClass('email-error')
    }
  }

})


$('.download').click(() => {
  window.open('./M1 Network Project WhitePaper.pdf')
})