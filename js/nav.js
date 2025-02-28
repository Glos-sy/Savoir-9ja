let screenSize = window.visualViewport.width;
const navBar = document.querySelector('.nav-section');
const header = document.querySelector('header');
let burgerBox = document.createElement('div');
const mobileMenu = document.querySelector('.burger-section');
burgerBox.classList.add('burger-menu');
document.body.appendChild(mobileMenu);

if(screenSize <= 500) {
    navBar.style.display = 'none';
    // burgerBox.innerHTML = `<div><img src="../img/game-icons_nigeria.png" class="mini-logo"/><span>Savoir 9ja</span></div><i class="fa-solid fa-bars"></i>`;
    // header.appendChild(burgerBox);
}
const burgerBtn = document.querySelector('.fa-bars');
burgerBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hide');
    burgerBtn.classList.toggle('fa-x')
})
// const burger = document.querySelector('.fa-bars');
// burger.addEventListener('click', ()=>{
//     // burger.classList.add('hide');
//     const mobileMenu = document.createElement('div');
//     mobileMenu.classList.add('side-bar')
//     document.body.appendChild(mobileMenu);
//     const menuItems = ["Home", "Attractions", "9ja", "More", "Close"];
//     menuItems.forEach((item)=>{
//        let newItem = document.createElement('a');
//        newItem.setAttribute('class', 'menu-item');
//        newItem.textContent = item;
//        mobileMenu.appendChild(newItem);

    //    if(newItem.contains('Close')) {
    //     newItem.classList.add('exit');
    //     document.querySelector('.exit').addEventListener('click', ()=>{
    //         burger.classList.remove('hide');
    //         mobileMenu.style.display = 'none';
    //     });
    //    }
//     });
// });
