// active nav
const activePage = window.location.pathname;
//console.log(activePage)
const navLinks = document.querySelectorAll('.link');
navLinks.forEach(item => {
    //console.log(item.href)
    if(item.href.includes(`${activePage}`)) {
        item.classList.add('active')
    }
})