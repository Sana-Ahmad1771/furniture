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
