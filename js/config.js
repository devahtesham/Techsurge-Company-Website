// INITIALIZE SWIPER SLIDER
var swiper = new Swiper(".hero-section", {
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

var swiper = new Swiper(".reviews-content-container", {
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

// var swiper = new Swiper(".testimonials-section", {
//   effect: "cards",
//   grabCursor: true,
// });

var swiper = new Swiper(".testimonials-section", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});


var swiper = new Swiper(".tech-talk-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: false,
  allowTouchMove: false,
  breakpoints: {
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      simulateTouch: false,
      allowTouchMove: false,
    },

    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      simulateTouch: false,
      allowTouchMove: false,
    },

    // when window width is >= 320px
    435: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    200:{
      slidesPerView: 1,
      spaceBetween: 20,
      simulateTouch: true,
      allowTouchMove: true,
    }
  }
});