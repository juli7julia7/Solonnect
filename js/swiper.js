const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 700px 
        768: {
            slidesPerView: 2,
        },
        // when window width is >= 1050px 
        1150: {
            slidesPerView: 3,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});