const swiper = new Swiper('.interior__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.interior__swiper .swiper-button-next',
    prevEl: '.interior__swiper .swiper-button-prev',
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
    nextEl: '.menu__swiper .swiper-button-next',
    prevEl: '.menu__swiper .swiper-button-prev',
  },

});

const swiper3 = new Swiper('.news__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.news__swiper .swiper-button-next',
    prevEl: '.news__swiper .swiper-button-prev',
  },

});