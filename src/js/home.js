
import '../css/home.less';
import $ from 'jquery';
import artTemplate from 'art-template/lib/template-web'
import './swiper.js'
import './video.js'
import './drag.js'

let featuresList = [
  {
    title: 'Player',
    textArr: [
      'enjoy the metaverse',
      'any device any where'
    ],
    image: require('../images/player.png')
  },
  {
    title: 'Developer',
    textArr: [
      'Creat great metaverse content and service for the globle users',
    ],
    image: require('../images/developer.png')
  },
  {
    textArr: [
      'Use M1 network to render game and service'
    ]
  },
  {
    title: 'Container',
    textArr: [
      'Provides computing power and network resources',
      'Reward for providing standby and running services to users'
    ],
    image: require('../images/container.png')
  },
  {
    title: 'Checker',
    textArr: [
      'Check the availability of the resources regularly',
      'Resource rating score',
      'Report resources'
    ],
    image: require('../images/checker.png')
  },
  {
    title: 'Indexer',
    textArr: [
      'Index by region',
      'Classification sorting',
      'Connect user requests',
      'Data report'
    ],
    image: require('../images/indexer.png')
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
        title: 'Leon',
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

let participants = [
  {
    content: [
      'Support Adaptive video Format',
      'Global deployment Edge service',
      'Quick start in millisecond'
    ],
    icon: require('../images/triangle.png'),
    bcontent: {
      title: 'Accessibility',
      textArr: [
        'Any device',
        'Any system',
        'Any where',
        'Instant play'
      ]
    }
  },
  {
    content: [
      'Ultra-low time-delay Real-time interaction',
      'Full Game compatibility',
      'SDK & Manage platform for developer'
    ],
    icon: require('../images/triangle.png'),
    bcontent: {
      title: 'Accessibility',
      textArr: [
        'Excellent experience',
        'Any game',
        'Easy to use and manage'
      ]
    }
  },
  {
    content: [
      'Cloud rendering',
      'Encrypts transmission Anti-Cheating',
      'Cryptographic ensured tokenomics'
    ],
    icon: require('../images/triangle.png'),
    bcontent: {
      title: 'Assurance',
      textArr: [
        'Prevent cheating',
        'Asset security'
      ]
    }
  }
]


if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
  roadMapList = {
    top: [
      {
        label: '2022 Q1',
        info: `Dehorizon integration and testnet launch.
        Global deployment for 5 most gamefi populated spot.
        First c# SDK release 
        `
      },
      {
        label: '2022 Q2',
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
        label: '2022 Q4',
        info: `Being able to support 1m enduser and most of existing gamefi application
        Started researching on concensus algorithm.
        `
      }  
    ],
    bot: [
      {
        label: '2023 Q2',
        info: `Testnet launching
        premining program launched.
        `
      },
      {
        label: '2023 Q4',
        info: 'Testnet mining launching.'
      },
      {
        label: '2024 Q2',
        info: 'Mainnet launching.'
      }
    ]
  }
}

// features
let html = artTemplate('featuresTemp', featuresList);
document.getElementById('features-list').innerHTML = html;


// participants
let participantshtml = artTemplate('participantsTemp', participants);
document.getElementById('participants-list').innerHTML = participantshtml;

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
  let classArr = [
    '.section-2',
    '.participants',
    '.section-1',
    
    '.section-3',
    '.section-4',
    '.section-6',
    '.section-7'
  ]
  $('.menu-list').each(function (idx, $sec) {
    handleMenuActive(`${classArr[idx]}`, $(window).scrollTop(), function () {
      $($sec).addClass("current").siblings().removeClass("current");
    })
  })

  p = $(this).scrollTop();
  if(p > 100) {
    $('.menu-box').addClass('menu-bgcolor')
  } else {
    $('.menu-box').removeClass('menu-bgcolor')
  }

  let ScrVal = $(window).scrollTop();

  let McrVal = $(".section-2").offset().top

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