import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';


Swiper.use([Navigation]); // 使用需要的功能
const mySwiper = new Swiper('.swiper-container', {
  loop: false,
  preventClicks : true,
  navigation: {
    nextEl: '.swiper-button-next', //切换箭头
    prevEl: '.swiper-button-prev',
  },
})