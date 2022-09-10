const science = document.querySelector('#science');
const datas = document.querySelector('.science__container-row');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentPage = 1;
let pageSize = 20;
let dataLength;
let data = [];

// navbar toggle ----------------------------------
const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".home__nav");
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav');
})

async function getDatas(page = 1) {
    await getScience();
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
    data.filter((row,index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;
        if(index >= start && index < end) return true;
    }).forEach(e => {
        item += `
        <div class="col-md-6 mb-4">
            <img src="${e.urlToImage}" alt="">
            <div class="description">
                <div class="desc-bottom">
                    <h5>
                        <a href="#">${e.title}</a>
                    </h5>
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
        datas.innerHTML = item;
    })
}
getDatas();
prevBtn.addEventListener('click', prevPage, false)
nextBtn.addEventListener('click', nextPage, false)
function nextPage(e) {
    e.preventDefault();
    if((currentPage * pageSize) < dataLength) {
        currentPage++;
    }
    console.log(dataLength)
    getDatas(currentPage);
}
function prevPage(e) {
    e.preventDefault();
    if(currentPage > 1) {
        currentPage--;
    }
    getDatas(currentPage);
}
function numberOfPage() {
    return Math.ceil(dataLength / pageSize);
}

window.addEventListener('load', getScience);
async function getScience() {
    let scienceData = await fetch('https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());  
    console.log(scienceData);
    data = scienceData.articles;
    dataLength = scienceData.totalResults;
}