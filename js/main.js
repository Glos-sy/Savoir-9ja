const cat_containers = document.querySelectorAll('.cat-img');
const slides = document.querySelectorAll('.carousel .slide');
const slide_img = document.querySelectorAll('.slide img');
const submit = document.querySelectorAll('.package-text span.book');
const modal = document.querySelector('.modal-loader');
const modal_close = document.querySelector('.continue');

cat_containers.forEach((container, index)=>container.style.background = `url(./../img/cat-${index + 1}.png)`);
slides.forEach((slide, index)=> slide.innerHTML = `<img src="./../img/slide-${index+1}.png" alt="Auto-sliding carousel image ${index+1}"/>`);

window.addEventListener(("DOMContentLoaded"), ()=>{
    submit.forEach((book)=>{
        book.addEventListener('focus', ()=> {
            setTimeout(() => {
                modal.classList.remove("hide");
            }, 1000);
        });
    });
});


modal_close.addEventListener('click', ()=> {
    setTimeout(() => {
        modal.classList.add("hide");
    }, 1000);
    window.location = "../index.html";
});
