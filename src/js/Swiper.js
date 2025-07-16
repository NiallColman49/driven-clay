var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 40,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        1280: {
            slidesPerView: 3.5,
        },
    },
});
