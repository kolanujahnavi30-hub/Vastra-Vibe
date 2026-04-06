// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
});

// Simple Image Slider
const images = ["bimage1.png", "bimage2.png", "bimage3.png"];
let current = 0;

const backImage = document.querySelector(".back-image");
const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");

rightArrow.addEventListener("click", function(){
    current = (current + 1) % images.length;
    backImage.style.backgroundImage = `url(${images[current]})`;
});

leftArrow.addEventListener("click", function(){
    current = (current - 1 + images.length) % images.length;
    backImage.style.backgroundImage = `url(${images[current]})`;
});
