let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;

  // Actualiza el índice actual
  currentIndex += direction;

  // Reinicia el índice si llega al final
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Mueve el slider
  const offset = -currentIndex * 100; // Cada slide ocupa 100% del ancho
  slider.style.transform = `translateX(${offset}%)`;
}
