const hamburger = document.getElementById("open-menu");
  const menu = document.getElementById("main-menu");


  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
   // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  centeredSlides:false,
  centeredSlidesBounds:false,
});
  // const slider = document.getElementById('reviewsSlider');
  // const scrollLeftBtn = document.getElementById('scrollLeft');
  // const scrollRightBtn = document.getElementById('scrollRight');

  // const scrollAmount = 400; // px to scroll per click

  // scrollLeftBtn.addEventListener('click', () => {
  //   slider.scrollBy({
  //     left: -scrollAmount,
  //     behavior: 'smooth'
  //   });
  // });

  // scrollRightBtn.addEventListener('click', () => {
  //   slider.scrollBy({
  //     left: scrollAmount,
  //     behavior: 'smooth'
  //   });
  // });

  //   const swiper = new Swiper('.reviews-swiper', {
  //   loop: false,
  //   spaceBetween: 10,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10
  //     },
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 15
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     }
  //   }
  // });