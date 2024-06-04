/* ------------------------------------------------------------------ */
/* Functionality for the review carousel on the home page (index.html).
/* ------------------------------------------------------------------ */

// Set variable for number of swiper slides
let revSlides = window.innerWidth < 992 ? 1 : 2;

let swiperTwo = new Swiper(".review-swiper", {
  slidesPerView: revSlides,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".rev-next",
    prevEl: ".rev-prev"
  }
});

addEventListener("resize", () => {
  // Determine the number of slides based on window width
  revSlides = window.innerWidth < 992 ? 1 : 2;

  // Destroy the previous instance before creating a new one
  swiperTwo.destroy(true, true);

  // Reinitialize Swiper with the updated settings
  swiperTwo = new Swiper(".review-swiper", {
    slidesPerView: revSlides,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".rev-next",
      prevEl: ".rev-prev"
    }
  });
});