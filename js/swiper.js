let myImageSlider = new Swiper(".mySwiper", {
  // speed: 2000,
  grabCursor: true,
  loop: true,
  spaceBetween: 0,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      // translate: ["-10%", 0, 0],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  controller: {
    inverse: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 
let mySwiperText = new Swiper(".mySwiperText", {
  direction: 'vertical',
  // speed: 1000,
  grabCursor: true,
  loop: true,
  controller: {
    inverse: false,
  },
});

myImageSlider.controller.control = mySwiperText
mySwiperText.controller.control = myImageSlider
// автоматически
// autoplay: {
//   delay: 3000,
//   disableOnInteraction: false,
// },
{
  // slider 2 services
  let myTextSlider = new Swiper(".swiper_services", {
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      360: {
        slidesPerView: 2.3,
        spaceBetween: 22,
      },
      769: {
        spaceBetween: 40,
      },
      936: {
        spaceBetween: 60,
      },
      1200: {
        spaceBetween: 80,
      },
      1240: {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 80,
      },
    }
  });
}

