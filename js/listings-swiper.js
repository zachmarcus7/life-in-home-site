/* ------------------------------------------------------------------ */
/* Functionality for the listings carousels. Depending on the screen size
/* 1 to 3 slides can be shown at once.
/* ------------------------------------------------------------------ */

// Set variable for number of swiper slides
let slides = 3;

if (window.innerWidth > 768 && window.innerWidth < 992) {
  slides = 2;
} else if (window.innerWidth < 768) {
  slides = 1;
}

let swiperOne = new Swiper(".listings-swiper", {
  slidesPerView: slides,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".listing-next",
    prevEl: ".listing-prev"
  }
});

addEventListener("resize", () => {
  if (window.innerWidth > 768 && window.innerWidth < 992) {
    slides = 2;
  } else if (window.innerWidth < 768) {
    slides = 1;
  } else {
    slides = 3;
  }

  // Destroy the previous instance before creating a new one
  swiperOne.destroy(true, true);

  swiperOne = new Swiper(".listings-swiper", {
    slidesPerView: slides,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".listing-next",
      prevEl: ".listing-prev"
    }
  });
});