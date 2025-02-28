"use strict";

let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  nextSlide(1);
}

setInterval(autoSlide, 3000);

function nextSlide(n) {
  showSlides((slideIndex = slideIndex + n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("festivals-slide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
  });

  // UPDATED STYLING
  slides[slideIndex - 1].style.display = "block";
}

function screenSizeChange(mediaQuery) {
  if (mediaQuery.matches) {
  }
}
