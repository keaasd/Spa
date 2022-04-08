// третий свайпер
{

  var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      280: {
        spaceBetween: 20,
      },
      360: {
        spaceBetween: 40,
      },
      567: {
        spaceBetween: 40,
      },
      1040: {
        spaceBetween: 50,
      },
      1200: {
        spaceBetween: 63,
      },
      1360: {
        spaceBetween: 63,
      },
    }
  });
}