// Search-box

// let navbar = document.querySelector('.navbar');
// let searchBtn = document.querySelector('.search-btn');

// searchBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   navbar.classList.toggle('on-search');
//   searchBtn.classList.toggle('on-search');
// });


let navbar = document.querySelector('.header-nav');
let searchBtn = document.querySelector('.search-btn');
let searchText = document.querySelector('.search-txt');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('hidden');
  // searchBtn.classList.toggle('lupa');
  searchBtn.classList.toggle('cross');
  searchText.classList.toggle('switch-on-off');
});


 // третий свайпер
// {

//   var swiper = new Swiper(".gallerySwiper", {
//     slidesPerView: 2,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     breakpoints: {
//       280: {
//         spaceBetween: 20,
//       },
//       360: {
//         spaceBetween: 40,
//       },
//       567: {
//         spaceBetween: 40,
//       },
//       1040: {
//         spaceBetween: 50,
//       },
//       1200: {
//         spaceBetween: 63,
//       },
//       1360: {
//         spaceBetween: 63,
//       },
//     }
//   });
// }

  function openModal() {
    document.getElementById("modal__mb").style.left = "0px";
}
function closeModal() {
    document.getElementById("modal__mb").style.left = "-3000px";
}

// Button HIDDEN

const texts = document.querySelectorAll('.text-hidden');

if (texts) {
  texts.forEach(text => {
    const moreBtn = text.querySelector('.show-more-btn');
    const moreText = text.querySelector('.show-more-text');

    moreText.style.display = 'none';

    moreBtn.addEventListener('click', e => {
      e.preventDefault();
      moreText.style.display = 'block';
      moreBtn.style.display = 'none';
    });
  });
}