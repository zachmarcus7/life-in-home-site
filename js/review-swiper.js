// set variable for number of swiper slides
var slides = 2;

if (window.innerWidth < 768) {
    slides = 1;
}

var swiperTwo = new Swiper(".review-swiper", {
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
        slides = 2;
    }

    swiperTwo = new Swiper(".review-swiper", {
        slidesPerView: slides,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});