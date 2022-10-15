const news = document.querySelector('#news');

const pathName = window.location.pathname.substring(1)
const catName = pathName.slice(0,pathName.indexOf('.'))
console.log(catName)

// navbar toggle ----------------------------------
const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".home__nav");
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav');
})

window.addEventListener('load', getDatas);
function getDatas() {
    getCategory(catName)
}

async function getCategory(category) {
    let datas = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=341bbc68b3b843159af93e0fae7dda1f`).then(res => res.json()); 
    console.log(datas);
    let item = '';
    datas.articles.forEach(e => {
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
        news.innerHTML = item;
    });
}