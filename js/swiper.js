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
        // spaceBetween: 18,
        spaceBetween: 40,
      },
      936: {
        // spaceBetween: 25,
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