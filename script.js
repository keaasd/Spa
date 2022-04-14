

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