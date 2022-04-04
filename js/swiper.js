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
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 319,
  loop: true,
  // autoplay: {
  //         delay: 2500,
  //         disableOnInteraction: false,
  //       },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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