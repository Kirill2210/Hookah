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