let typed = new Typed('.about__container-row-text', {
    strings: ['',`Merhaba, ben Ümmühan&nbsp;<i class="fa-solid fa-hand"></i><br/>Yazılım alanında kendini geliştirmeye çalışan ve kendini geliştirirken başkalarına da fayda sağlamayı hedefleyen biriyim. Kendimi <span style="color: #42f998;">Frontend Developer</span> olarak tanımlıyorum.`],
    typeSpeed: 50,
    startDelay: 0,
    backSpeed: 0,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    autoInsertCss: true,
    contentType: 'html',
});

let swiperr = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 100,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});