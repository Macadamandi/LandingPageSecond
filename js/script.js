const swiper = new Swiper('.swiper',{
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    // when window width is >= 1090px
    1090: {
      slidesPerView: 7,
      spaceBetween: 10
    }
  },
  mousewheel: {
    invert: false
  }
});