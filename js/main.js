const cat_containers = document.querySelectorAll('.cat-img');
const slides = document.querySelectorAll('.carousel .slide');
const slide_img = document.querySelectorAll('.slide img');
console.log(slides)

cat_containers.forEach((container, index)=>container.style.background = `url(../img/cat-${index + 1}.png)`);
slides.forEach((slide, index)=> slide.innerHTML = `<img src="../img/slide-${index+1}.png" alt="Auto-sliding carousel image ${index+1}"/>`);
