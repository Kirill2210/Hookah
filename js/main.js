const swiper = new Swiper('.interior__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.menu__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});