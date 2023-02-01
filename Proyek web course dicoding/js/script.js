// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu hamburger di klik
document.querySelector('#hamburger-menu').onclick = ( ) => {
navbarNav.classList.toggle('active');

}
// jika d klik d luar sidebar menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if( !hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});   