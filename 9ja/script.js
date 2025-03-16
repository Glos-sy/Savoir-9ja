"use strict";

document.querySelector(".fa-bars").addEventListener("click", function () {
  const links = document.querySelector("#nav-bar");
  const icon = document.querySelector("#bars");
  links.classList.toggle("show");
  icon.classList.toggle("fa-xmark");
});
