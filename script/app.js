
const menuButton = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
let navList = document.querySelector('.nav-link');

console.log(menuButton);
console.log(navList);

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

function openMenu(){
    navList.style.transition = 'all 300ms ease-in-out';
    this.style.display = 'none';
    closeButton.style.display = 'block';
    navList.style.top = '7%';
}
function closeMenu(){
    navList.style.transition = 'all 300ms ease-in-out';
    this.style.display = 'none';
    menuButton.style.display = 'block';
    navList.style.top = '-100%';
}