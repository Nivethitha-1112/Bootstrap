const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0; // Start with the first set of images

prevBtn.addEventListener('click', () => {
    counter--;
    const slideWidth = slide[0].clientWidth + 20; // Width of each slide including margin
    slides.style.transition = 'transform 0.4s ease-in-out';
    slides.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
    counter++;
    const slideWidth = slide[0].clientWidth + 20; // Width of each slide including margin
    slides.style.transition = 'transform 0.4s ease-in-out';
    slides.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
});

// Repeat the images when reaching the end
slides.addEventListener('transitionend', () => {
    const slideWidth = slide[0].clientWidth + 20; // Width of each slide including margin
    if (counter >= slide.length / 3) {
        counter = 0;
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    }
    if (counter < 0) {
        counter = slide.length / 3 - 1;
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    }
});
