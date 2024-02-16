let currentSlideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  currentSlideIndex++;
  if (currentSlideIndex > slides.length) {
    currentSlideIndex = 1;
  }

  slides[currentSlideIndex - 1].style.display = "block";
  dots[currentSlideIndex - 1].classList.add("active");

  setTimeout(showSlides, 7000); // Інтервал перемикання слайдів у мілісекундах (в даному випадку - 2000 мс або 2 секунди)
}