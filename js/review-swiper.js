/* ------------------------------------------------------------------ */
/* Functionality for the review carousel on the home page (index.html).
/* ------------------------------------------------------------------ */

// set variable for number of swiper slides
var slides = 2;

if (window.innerWidth < 992) {
  slides = 1;
}

var swiperTwo = new Swiper(".review-swiper", {
  slidesPerView: slides,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".rev-next",
    prevEl: ".rev-prev"
  }
});

addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    slides = 1;
  }
  else {
    slides = 2;
  }

  swiperTwo = new Swiper(".review-swiper", {
    slidesPerView: slides,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".rev-next",
      prevEl: ".rev-prev"
    }
  });
});