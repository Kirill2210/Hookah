ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.836099, 60.614470],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([56.836210, 60.614412], {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/map.svg',
            // Размеры метки.
            iconImageSize: [44, 63],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});

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
  slidesPerView: 'auto',
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.menu__swiper .swiper-button-next',
    prevEl: '.menu__swiper .swiper-button-prev',
  },

  breakpoints: {
    950: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 30
    },
    720: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 10
    }
  }

});

const swiper3 = new Swiper('.news__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.news__swiper .swiper-button-next',
    prevEl: '.news__swiper .swiper-button-prev',
  },

  breakpoints: {
    950: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 30
    },
    580: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 30
    }
  }

});

/* burger menu */

const list = document.querySelector('.header__list')
const burgerMenu = document.querySelector('.header__menu')

list.addEventListener('click', function(){
  burgerMenu.classList.toggle('active')
})

/* navigation */
const linkNav = document.querySelectorAll('.header__link')

linkNav.forEach(function(ev) {
  ev.addEventListener('click', function(a) {
    a.preventDefault();
    const linkAtr = this.dataset.nav
    const navBlock = document.querySelector('.nav-block[data-nav ="'+linkAtr+'"]')
    navBlock.scrollIntoView({block:'start', behavior:'smooth'});
    burgerMenu.classList.remove('active')
  })
})