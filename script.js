

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


// Button HIDDEN
// const texts = document.querySelectorAll('.text-hidden');

// if (texts) {
//   texts.forEach(text => {
//     const moreBtn = text.querySelector('.show-more-btn');
//     const moreText = text.querySelector('.show-more-text');

//     moreText.style.display = 'none';

//     moreBtn.addEventListener('click', e => {
//       e.preventDefault();
//       moreText.style.display = 'block';
//       moreBtn.style.display = 'none';
//     });
//   });
// }

// .noscroll { overflow: hidden; height: 100 %; }

const open = document.querySelector('.burger-btn');
const close = document.querySelector('.header-modal-close');
const body = document.querySelector('body');
const modalWindow = document.querySelector('.modal_window');


open.addEventListener('click', () => {
  body.classList.add('noscroll');
});
close.addEventListener('click', () => {
  body.classList.remove('noscroll');
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__mb');
  if (!isModal) {
    console.log('мимо: ');
    modalWindow.style.left = "-3000px";
    body.classList.remove('noscroll');
  }
});
