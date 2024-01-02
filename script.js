let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-close-line');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('ri-close-line');
    navBar.classList.remove('active');
}