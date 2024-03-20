let currentSlideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides[currentSlideIndex].style.display = "block";
  currentSlideIndex++;

  setTimeout(showSlides, 7000); // Інтервал перемикання слайдів у мілісекундах (в даному випадку - 2000 мс або 2 секунди)
}