// Search-box

let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('on-search');
  searchBtn.classList.toggle('on-search');
});

// Initialize Swiper1

$(document).ready(function(){
  $('.slider1').slick({
    arrows:true,
    dots:false,
    fade:false,
    adaptiveHeight:true,
    slidesToShow:1,
    slidesToScroll:1,
    speed:500,
    easing:'ease',
    infinite:false,
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
        
      }
    ]
  });

});

// Initialize Swiper2


$(document).ready(function(){
  $('.slider2').slick({
    arrows:false,
    dots:false,
    adaptiveHeight:true,
    slidesToShow:3,
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
    waitForAnimate:false,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },{
        breakpoint: 500,
        settings: {
          slidesToShow:1
        }
      }
    ],
    mobileFirst:false,
    appendArrows:$('.arrows')
  });

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
    document.getElementById("modal").style.left = "0px";
}
function closeModal() {
    document.getElementById("modal").style.left = "-200%";
}
 