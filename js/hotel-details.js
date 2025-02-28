const slides = document.querySelectorAll('.slide');
const banner = document.querySelector('.hotel-carousel');
let counter = 0;

const removeBorder = ()=>{
    slides.forEach((img)=>{
        img.style.border = "none";
        img.style.width="8rem";
        img.style.height="7rem";
    });
};
removeBorder();

slides.forEach((slide, index)=> slide.style.background = `url("../img/transcorp-${index+1}.png")` );
slides.forEach((slide, index)=>{
    slide.addEventListener("click", ()=> {
        banner.style.background = `url("../img/transcorp-${index+1}.png")`
        removeBorder();
        slide.style.border = "0.2rem solid #fff";
        slide.style.height = "8rem";
        slide.style.width = "9rem";
    });
});

const autoSlide = ()=>{
    counter++;
    counter = counter > slides.length - 1 ? 0 : counter < 1 ? slides.length -1: counter;
    banner.style.background = `url("../img/transcorp-${counter+1}.png")`
    removeBorder();
    slides[counter].style.border = "0.2rem solid #fff";
    slides[counter].style.height = "8rem";
    slides[counter].style.width = "9rem";
}
setInterval(autoSlide, 3000);