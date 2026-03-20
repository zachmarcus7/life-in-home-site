/* ------------------------------------------------------------------ */
/* Functionality for the review carousel on the home page (index.html).
/* ------------------------------------------------------------------ */

let swiperTwo = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".rev-next",
    prevEl: ".rev-prev"
  }
});