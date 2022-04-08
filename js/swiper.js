var swiper = new Swiper(".mySwiper", {
  speed: 2000,
  grabCursor: true,
  // автоматически 
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // замещает
  effect: "creative",
  creativeEffect: {
    next: {
      translate: ["100%", 0, 0],
    },
  },
  // выше добавил
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// slider 2 services
{
  var swiper = new Swiper(".swiper_services", {
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    // spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 60,
      },
      360: {
        spaceBetween: 0,
      },
      768: {
        spaceBetween: 0,
      },
      1040: {
        spaceBetween: 430,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1440: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 60,
      },
    }
  });
}