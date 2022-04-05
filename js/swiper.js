var swiper = new Swiper(".mySwiper", {
  // добавим таймер
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // таймер выше  
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
        spaceBetween: 60,
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



  // автоматически
  // {
  //   var swiper = new Swiper(".mySwiper", {
  //     spaceBetween: 30,
  //     centeredSlides: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // }