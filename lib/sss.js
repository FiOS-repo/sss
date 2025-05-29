document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides section");
    const totalSlides = slides.length;

    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        
        // Check if Slide is out of bounds
        if (index < 0 || index >= slides.length) {
            console.warn("Slide index out of bounds:", index)
            document.body.innerHTML = "End of Presentration"
            return
        }

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none"
        });

        // Show the current slide
        slides[currentSlide].style.display = "block"
    }

    // Show the first slide
    showSlide(currentSlide);

});
