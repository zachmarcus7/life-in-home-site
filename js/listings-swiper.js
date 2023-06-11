// set variable for number of swiper slides
var slides = 3;

if (window.innerWidth < 768) {
    slides = 1;
}

var swiperOne = new Swiper(".listings-swiper", {
    slidesPerView: slides,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        slides = 1;
    }
    else {
        slides = 3;
    }

    swiperOne = new Swiper(".listings-swiper", {
        slidesPerView: slides,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});