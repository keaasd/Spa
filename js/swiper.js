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
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 60,
      },
      360: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 56,
      },
      768: {
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 114,
      },
    }
  });
}
{
  // третий свайпер
  var swiper = new Swiper(".gallerySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    fade: false,
    // slidesPerView: "auto",
    slidesPerView: 2,
    spaceBetween: 120,
    coverflowEffect: {
      // rotate: 50,
      stretch: 0,
      depth: 'auto',
      modifier: 2,
    },
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}