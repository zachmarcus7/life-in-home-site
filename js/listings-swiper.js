// set variable for number of swiper slides
var slides = 3;

if (window.innerWidth > 768 && window.innerWidth < 992) {
    slides = 2;
}
else if (window.innerWidth < 768) {
    slides = 1;
}

var swiperOne = new Swiper(".listings-swiper", {
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
    }
    else if (window.innerWidth < 768) {
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
            nextEl: ".listing-next",
            prevEl: ".listing-prev"
        }
    });
});