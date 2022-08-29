const science = document.querySelector('#science');
const datas = document.querySelector('.science__container-row');

window.addEventListener('load', getScience);
async function getScience() {
    let scienceData = await fetch('https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=341bbc68b3b843159af93e0fae7dda1f').then(res => res.json());  
    console.log(scienceData);
    let item = '';
    scienceData.articles.forEach(e => {
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
    });
}