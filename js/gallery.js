// третий свайпер
{

  var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 2,
    spaceBetween: 96,
    slideActiveClass: 'swiper-slide-active-mod',
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