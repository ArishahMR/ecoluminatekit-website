const carouselContainer = document.querySelector('.carousel-container');
let translateX = 0;
let currentIndex = 0;
const totalImages = 3; // Number of images in your carousel

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalImages - 1;
        translateX = -33.33 * (totalImages - 1);
    } else {
        currentIndex--;
        translateX += 33.33;
    }
    carouselContainer.style.transform = `translateX(${translateX}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex === totalImages - 1) {
        currentIndex = 0;
        translateX = 0;
    } else {
        currentIndex++;
        translateX -= 33.33;
    }
    carouselContainer.style.transform = `translateX(${translateX}%)`;
});



