const images = document.querySelectorAll('.img-nav img');
const carousel = document.querySelector('.carousel-container');
const left = document.querySelector('.fa-circle-left');
const right = document.querySelector('.fa-circle-right');
let counter = 0;

//Array to store image url path
const bg_img = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6'];

// Function to blur all images
const blurImage = ()=>{
    images.forEach((img)=>{
        img.style.opacity = 0.3
    });
};

// Invoke blur image function
blurImage();

// Set first image to have full opacity
images[0].style.opacity = 1;

//Previous button function
const previous = ()=>{
    counter--;
    if(counter < 0) counter = bg_img.length - 1;
    carousel.style.background = `url('../img/landmark-${bg_img[counter]}.png`;
    blurImage();
    images[counter].style.opacity = 1;
}

//Next button function
const next = ()=>{
    counter++;
    if(counter > bg_img.length-1) counter = 0;
    carousel.style.background = `url('../img/landmark-${bg_img[counter]}.png`;
    blurImage();
    images[counter].style.opacity = 1;
}
left.addEventListener('click', previous);
right.addEventListener('click', next);

// Function to loop through image thumbs on click

images.forEach((img, index)=>{
    img.addEventListener('click', ()=>{
        counter = index;
        blurImage();
        img.style.opacity = 1;
        carousel.style.background = `url('../img/landmark-${bg_img[counter]}.png`;
    });
});

// setInterval(next, 3000);