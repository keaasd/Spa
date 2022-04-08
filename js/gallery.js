// третий свайпер
{

  var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 2,
    // spaceBetween: 96,
    slideActiveClass: 'swiper-slide-active-mod',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 60,
      },
      360: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 56,
      },
      768: {
        spaceBetween: 50,
      },
      1040: {
        spaceBetween: 50,
      },
      1200: {
        spaceBetween: 30,
      },
      1360: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 96,
      },
    }
  });
}