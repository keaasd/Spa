// Search-box

let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('on-search');
  searchBtn.classList.toggle('on-search');
});



  // Initialize Swiper3
 
  $(document).ready(function(){
    $('.slider3').slick({
      arrows:true,
      dots:false,
      fade:false,
      adaptiveHeight:true,
      slidesToShow:2,
      slidesToScroll:1,
      speed:500,
      easing:'ease',
      infinite:true,
      initialSlide:0,
      autoplay:false,
      autoplaySpeed:2000,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      draggable:true,
      swipe:true,
      touchThreshold:10,
      touchMove:true,
      variableWidth:true,
      centerMode:false,
      // centerPadding: '60px',
      waitForAnimate:false,
      responsive:[
        {
          breakpoint: 768,
          settings: {
            slidesToShow:1
          }
        }
      ]
    });
  
  });

  function openModal() {
    document.getElementById("modal__mb").style.left = "0px";
}
function closeModal() {
    document.getElementById("modal__mb").style.left = "-3000px";
}