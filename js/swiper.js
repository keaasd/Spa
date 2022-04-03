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