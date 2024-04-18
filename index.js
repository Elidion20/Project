document.addEventListener("DOMContentLoaded", function() {
    const carouselTrack = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const carouselItems = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;
    const itemWidth = carouselItems[0].offsetWidth + 20; 

    prevButton.addEventListener("click", function() {
        currentIndex = Math.max(currentIndex - 1, 0);
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });

    nextButton.addEventListener("click", function() {
        currentIndex = Math.min(currentIndex + 1, carouselItems.length - 1);
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    });
});