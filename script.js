let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const transitionDuration = 500; // Duration in milliseconds

function showNextSlide() {
    currentIndex++;
    slides.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Reset to first slide seamlessly
    if (currentIndex === slideCount - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 0;
            slides.style.transform = `translateX(0%)`;
        }, transitionDuration); // Match the transition duration
    }
}

function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slideCount - 2; // Go to the second last slide
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            slides.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        }, 20); // Small delay to ensure the transition is applied
    } else {
        slides.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Automatically show the next slide every 3 seconds
setInterval(showNextSlide, 3000);
