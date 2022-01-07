
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
        title: 'Richard',
        text: `iMin Technology Pte Ltd Co-Founder 
          Sunway International Pte Ltd
          ZTE Singapore Pte Ltd  Managing Director
          Beijing University of Technology
          University College Dublin
        `,
        image: require('../images/ceo.png')
      },
      {
        title: 'Dan',
        text: `MyGamez Ltd.  Advisor & Investor
          Riot Games
          Head of Operations - Riot China
          Producer and Product Manager
          Princeton University
        `,
        image: require('../images/cmo.png')
      },
      {
        title: 'Loewion',
        text: `Google Stadia  Project Manager
          YoutubeMonetzation  Project Manager
          Netflix  Senior Director Of Engineering
          Massachusetts Institute of Technology
          Nanyang Technological University
        `,
        image: require('../images/cto.png')
      },
      {
        title: 'Eric',
        text: `Member Of The Supervisory Board
          KPN  Group Chief Tehnology Officer
          Erasmus University Rotterdam  MBA
          Technische Universiteit Delft
        `,
        image: require('../images/cio.png')
      }
    ]
  },
  advisors: {
    title: 'Advisors',
    list: [
      {
        title: 'Erik Hoving',
        text: `Senior advisor of Monitor Deloitte,
        Member of the supervisory board of myTomorows,     
        Former group CTO of KPN,
        Former CEO of Zenitel
        `,
        image: require('../images/Eriks.jpg')
      },
      {
        title: 'Thorsten Dirks',
        text: `Founder of OIH-One GmbH,
        Former CEO of Eurowings and board member of Lufthansa,
        Former CEO of Telefónica Germany,
        Former CEO of E-Plus Group`,
        image: require('../images/ThorstenDirks.jpg')
      }
    ]
  }
}

let roadMapList = {
  top: [
    {
      label: '2022 Q1',
      info: `Dehorizon integration and testnet launch.
      Global deployment for 5 most gamefi populated spot.
      First c# SDK release 
      `
    },
    {
      label: '2022 Q3',
      info: `Js/c#/c++ SDK release to support more types of game.
      2k video streaming on testnet.
      `
    },
    {
      label: '2023 Q2',
      info: `Testnet launching
      premining program launched.
      `
    },
    {
      label: '2024 Q2',
      info: 'Mainnet launching.'
    }
  ],
  bot: [
    {
      label: '2022 Q2',
      info: `Dehorizon integration and testnet launch.
      Global deployment for 5 most gamefi populated spot.
      First c# SDK release 
      `
    },
    {
      label: '2022 Q4',
      info: `Being able to support 1m enduser and most of existing gamefi application
      Started researching on concensus algorithm.
      `
    },
    {
      label: '2023 Q4',
      info: 'Testnet mining launching.'
    }
  ]
}
// features
let html = artTemplate('featuresTemp', featuresList);
document.getElementById('features-list').innerHTML = html;

// advisorsTeam
// let advisorsTemp = artTemplate('advisorsTemp', advisorAndTeam);
// document.getElementById('advisorAndTeam').innerHTML = advisorsTemp;

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
    

    if(idx != 4) {
      handleMenuActive(`.section-${idx + 1}`, $(window).scrollTop(), function () {
        $($sec).addClass("current").siblings().removeClass("current");
      })
    }
    
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
  let myReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
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
  window.open('./download/whitepaper.pdf')
})