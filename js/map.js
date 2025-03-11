let cardBtn = document.querySelectorAll('.card');
const map = document.querySelector('.main-map');
cardBtn.forEach((card)=>{
    card.addEventListener('click', ()=>{
        map.style.background = 'url("../img/mapviews.png")';
        map.classList.add('animap');
    })
});