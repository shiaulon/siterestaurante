let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');
let timer;

function showSlides(index) {
    // Escondendo todas as imagens
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // Exibindo a imagem atual
    slides[index].style.display = "block";
    dots[index].classList.add("active");

    // Atualizando o índice para o próximo slide
    slideIndex = (index + 1) % slides.length;
}

function nextSlide() {
    showSlides(slideIndex);
    resetTimer();
}

function prevSlide() {
    slideIndex = (slideIndex - 2 + slides.length) % slides.length; // Volta dois, pois o próximo slide já foi incrementado
    showSlides(slideIndex);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 6000); // Troca automaticamente a cada 6 segundos
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Inicia o carrossel
showSlides(slideIndex);
timer = setInterval(nextSlide, 6000);

// Controla o clique nas bolinhas (dots)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides(slideIndex);
        resetTimer();
    });
});