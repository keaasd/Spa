

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

// находим родительский ul 
const servisesBtn = document.querySelector('.menu__list');
console.log('servisesBtn', servisesBtn);
// найдем родителя, который будем скрывать
const servisesBox = document.querySelector('.sub-menu__list');
console.log('servisesBox: ', servisesBox);
// найдем стрелочку
const servButton_arrow = document.querySelector('.arrow');
console.log('servButton_arrow: ', servButton_arrow);
// Клик по кнопке. Открыть/Закрыть select
servisesBtn.addEventListener('click', function (e) {
      servisesBox.classList.toggle('vizibl');
      servButton_arrow.classList.toggle('arrow-active');
      // this.classList.add('dropdown__button--active');
  });
  
  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  
  // Клик снаружи дропдауна. Закрыть дропдаун
  // document.addEventListener('click', function (e) {
  //     if (e.target !== dropDownBtn) {
  //         dropDownBtn.classList.remove('dropdown__button--active');
  //         dropDownList.classList.remove('dropdown__list--visible');
  //     }
  // });

  // Нажатие на Tab или Escape. Закрыть дропдаун
//   document.addEventListener('keydown', function (e) {
//       if (e.key === 'Tab' || e.key === 'Escape') {
//           dropDownBtn.classList.remove('dropdown__button--active');
//           dropDownList.classList.remove('dropdown__list--visible');
//       }
//   });
// });

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


        // Smooth Scroll
        const links = document.querySelectorAll(".online-reg");

        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
        }

        // Button UP

        window.onscroll = function(){scrollFunction()};

        const upbuttons = document.querySelectorAll(".button-up");

        for (const upbutton of upbuttons) {
            upbutton.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
        }

        function scrollFunction(){
            if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
                // document.getElementById('btnUp').className = 'button-up visible';
            } else {
                // document.getElementById('btnUp').className = 'button-up hidden';
            }
        }

     


    