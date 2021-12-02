import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';


Swiper.use([Navigation]); // 使用需要的功能


// 图片预览
$('.slide>img').click((event) => {
  event.stopPropagation()
  let index = parseInt(event.target.dataset.index)
  const modelSwiper = new Swiper('.swiper-model-container', {
    initialSlide: index,
    loop: false,
    preventClicks : false,
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.swiper-button-next', //切换箭头
      prevEl: '.swiper-button-prev',
    },
  })

   $('.swiper-model').css({
     'opacity': 1,
     'z-index': 999999
   })
})


const mySwiper = new Swiper('.swiper-container', {
  loop: false,
  preventClicks : true,
  navigation: {
    nextEl: '.swiper-button-next', //切换箭头
    prevEl: '.swiper-button-prev',
  },
})

const BlockchainSwiper = new Swiper('.swiper-Blockchain', {
  loop: false,
  preventClicks : true,
  slidesPerView : 'auto',
  breakpoints: { 
    //当swiper宽度大于等于800
    800: {
      slidesPerView : 'auto',
    },
    //当swiper宽度大于等于768
    1: { 
      slidesPerView: 1,
      spaceBetween: 50
    },
   }
})

$('.swiper-wrapper').click((event) => {
  event.preventDefault(); 
  $('.swiper-model').css({
    'opacity': 0,
    'z-index': -10001
  })
})
$('.swiper-close').click((event) => {
  event.preventDefault(); 
  $('.swiper-model').css({
    'opacity': 0,
    'z-index': -10001
  })
})