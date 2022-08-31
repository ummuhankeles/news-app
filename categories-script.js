const categories = document.querySelector('#categories');
const datas = document.querySelector('.categories__container-right');
const inputs = document.querySelectorAll('.form-check-input');

inputs.forEach(item => {
    let filteredData = item.value;
    console.log(filteredData);
    
    item.addEventListener('click', function() {
        async function filtered() {
            let filterResult = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${filteredData}&apiKey=341bbc68b3b843159af93e0fae7dda1f`).then(res => res.json());
            console.log(filterResult);
            let item = '';
            filterResult.articles.forEach(e => {
                item += `
                <div class="categories__container-right-row row mb-5">
                    <img src="${e.urlToImage}" alt="">
                    <div class="description">
                        <h6>
                            <a href="#">${e.title}</a>
                        </h6>
                        <p>${e.description}</p>
                        <div class="bottom">
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
                datas.innerHTML = item;
            });
        }
        filtered();
    });
    getDatas();
})

async function getDatas() {
    let general = await fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());
    //console.log(general);
    let item = '';
    general.articles.forEach(e => {
        item += `
        <div class="categories__container-right-row row mb-5">
            <img src="${e.urlToImage}" alt="">
            <div class="description">
                <h6>
                    <a href="#">${e.title}</a>
                </h6>
                <p>${e.description}</p>
                <div class="bottom">
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
        datas.innerHTML = item;
    });
}