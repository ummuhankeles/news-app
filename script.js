const slide = document.querySelector('.home__slider-content');
const topRowLeft = document.querySelector('.home-top-left');
const topRowRight = document.querySelector('.home-top-right');
const trend = document.querySelector('.right-col-desc');
const homeCenter = document.querySelector('.home__container-center');
const entertainmentData = document.querySelector('.bottom-row-left');
const healthData = document.querySelector('.bottom-row-right');
const generalData = document.querySelector('.row-right-last');
const scienceData = document.querySelector('.home-last-data');
const prevBtn = document.querySelector('.pag-prev');
const nextBtn = document.querySelector('.pag-next');
let slideIndex = 1;
let pageSize = 3;
let currentPage = 1;
let data = [];

// navbar toggle ----------------------------------
const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".home__nav");
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav')
    //links.style.display = 'block';
})

window.addEventListener('load', getData);
async function getData() {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    //let data = Math.floor(Math.random() * result.articles.length);
    let sliderResult = result.articles.slice(0,3);
    let topRowLeftResult = result.articles.slice(3,4);
    let topRowRightResult = result.articles.slice(4,7);
    let trending = result.articles.slice(7,11);
    let center = result.articles.slice(11,12);

    let items = '';
    sliderResult.forEach(e => {
        items += `
        <div class="slide row">
            <div class="slide-left col-md-6">
                <div class="home__slider-image">
                    <img src="${e.urlToImage}" alt="">
                </div>
            </div>
            <div class="slide-right col-md-6">
                <h4>Editor's Pick</h4>
                <h2>
                <a href="#">${e.title}</a>
                </h2>
                <p>${e.description}</p>
                <div class="home__slider-right-bottom">
                <span class="mb-2">
                    <a href="#">${e.author}</a>
                </span>
                <span>
                    ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                </span>
                </div>
            </div>
        </div>
        `
        slide.innerHTML = items;
    })

    let element = '';
    topRowLeftResult.forEach(e => {
        element += `
        <div class="home__container-top-row-left">
            <div class="row-left-img mb-2">
                <img src="${e.urlToImage}" alt="" width="100%">
            </div>
            <h4>
                <a href="#">${e.title}</a>
            </h4>
            <p>${e.description}</p>
            <div class="home__container-bottom">
            <span class="mb-2">
                <a href="#">${e.author}</a>
            </span>
            <span>
            ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
            </span>
            </div>
        </div>
        `
        topRowLeft.innerHTML = element;
    })

    let item = '';
    topRowRightResult.forEach(e => {
        item += `
        <div class="home__container-top-row-right row mb-3">
            <img src="${e.urlToImage}" alt="">
            <div class="description">
                <h6>
                    <a href="#">${e.title}</a>
                </h6>
                <div class="row-right-bottom">
                    <span>
                        <a href="#">${e.author}</a>
                    </span>
                    <span>
                    ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                    </span>
                </div>
            </div>
        </div>
        `
        topRowRight.innerHTML = item;
    })

    let elements = '';
    let counter = 0;
    trending.forEach(e => {
        elements += `
        <div class="right-col-content row mb-5">
            <div class="number">${'0' + ++counter}</div>
            <div class="desc">
            <h6>
                <a href="#">${e.title}</a>
            </h6>
            <div class="row-col-content-bottom">
                <span>
                    <a href="#">${e.author}</a>
                </span>
                <span>
                ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                </span>
            </div>
            </div>
        </div>
        `
        trend.innerHTML = elements;
    })

    let homeCenterData = '';
    center.forEach(e => {
        homeCenterData += `
        <div class="home__container-center-content row">
            <div class="content-left-part col-md-6">
                <div class="home__container-image">
                    <img src="${e.urlToImage}" alt="">
                </div>
            </div>
            <div class="content-right-part col-md-6">
            <div class="desc">
                <h4>Editor's Pick</h4>
                <h2 class="mb-3">
                    <a href="#">${e.title}</a>
                </h2>
                <p>${e.description}</p>
                <div class="content-right-part-bottom">
                    <span class="mb-2">
                        <a href="#">${e.author}</a>
                    </span>
                    <span>
                        ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                    </span>
                </div>
            </div>
            </div>
        </div>
        `
        homeCenter.innerHTML = homeCenterData;
    })
}

// get the entertainment data ----------------------------------
window.addEventListener('load', getEntertainment);
async function getEntertainment() {
    let entertainment = await fetch(' https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    homeBottomLeftData = entertainment.articles.slice(0,3);
    let items = '';
    homeBottomLeftData.forEach(e => {
        items += `
        <div class="row-left-content row mb-3">
            <img src="${e.urlToImage}" alt="">
            <div class="description">
                <div class="desc-bottom">
                    <h6>
                        <a href="#">${e.title}</a>
                    </h6>
                    <p>${e.description}</p>
                    <div class="row-right-bottom">
                        <span>
                            <a href="#">${e.author}</a>
                        </span>
                        <span>
                            ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
        entertainmentData.innerHTML = items;
    })
}

// get the health data ----------------------------------
window.addEventListener('load', getHealth);
async function getHealth() {
    let health = await fetch(' https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    let homeBottomRightData = health.articles.slice(0,3);
    let items = '';
    homeBottomRightData.forEach(e => {
        items += `
        <div class="row-right-content row mb-3">
            <img src="${e.urlToImage}" alt="">
            <div class="description">
                <div class="desc-bottom">
                    <h6>
                        <a href="#">${e.title}</a>
                    </h6>
                    <p>${e.description}</p>
                    <div class="row-right-bottom">
                        <span>
                            <a href="#">${e.author}</a>
                        </span>
                        <span>
                            ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
        healthData.innerHTML = items;
    })
}

// home page pagination and get the general data ----------------------------------
async function renderTable(page = 1) {
    await getGeneral();
    if(page === 1) {
        prevBtn.style.display = "none";
    }else {
        prevBtn.style.display = "block";
    }
    if(page === numberOfPage()) {
        nextBtn.style.display = "none";
    }else {
        nextBtn.style.display = "block";
    }

    let item = '';
    data.articles.filter((row, index) => {
        let start = (currentPage -1) * pageSize;
        let end = currentPage * pageSize;
        if(index >= start && index<end) return true;
    }).forEach(e => {
        item += `
        <div class="row-last-content row mb-3">
            <div class="last-desc">
                <div class="last-bottom">
                    <h4>
                        <a href="#">${e.title}</a>
                    </h4>
                    <p>${e.description}</p>
                    <div class="row-last-bottom">
                    <span>
                        <a href="#">${e.author}</a>
                    </span>
                    <span>
                        ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                    </span>
                    </div>
                </div>
            </div>
            <img src="${e.urlToImage}" alt="">
        </div>
        `
        generalData.innerHTML = item;
    })
}
renderTable();
prevBtn.addEventListener('click', prevPage, false)
nextBtn.addEventListener('click', nextPage, false)
function nextPage(e) {
    e.preventDefault();
    if((currentPage * pageSize) < data.articles.length) {
        currentPage++;
    }
    renderTable(currentPage);
}
function prevPage(e) {
    e.preventDefault();
    if(currentPage > 1) {
        currentPage--;
    }
    renderTable(currentPage);
}
function numberOfPage() {
    return Math.ceil(data.articles.length / pageSize);
}
window.addEventListener('load', getGeneral);
async function getGeneral() {
    let general = await fetch(' https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    data = general;
}

// get the science data ----------------------------------
window.addEventListener('load', getScience);
async function getScience() {
    let science = await fetch(' https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    let homeLastData = science.articles.slice(0,4);
    let items = '';
    let counter = '';
    homeLastData.forEach(e => {
        items += `
        <div class="last-col-content row mb-5">
            <div class="number">${'0' + ++counter}</div>
                <div class="last-content">
                    <h6>
                        <a href="#">${e.title}</a>
                    </h6>
                    <div class="row-col-content-last">
                        <span>
                            <a href="#">${e.author}</a>
                        </span>
                        <span>
                        ${e.publishedAt.slice(0,10)} <span>•</span> 3 min read <span><i class="fa-solid fa-star"></i></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
        scienceData.innerHTML = items;
    })
}

// slider ----------------------------------
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slide = document.getElementsByClassName("slide");
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
        
    }
    slide[slideIndex-1].style.display = "flex";
}

