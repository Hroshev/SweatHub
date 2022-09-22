/* Connecting all modules Swiper */
import Swiper from "swiper/bundle";

const reviews = new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
});