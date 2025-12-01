let slideIndex = 0;
const slides = document.querySelectorAll(".slider-image");

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active-slide"));

  slideIndex = (n + slides.length) % slides.length; // wrap around
  slides[slideIndex].classList.add("active-slide");
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

showSlide(slideIndex);