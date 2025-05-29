document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides section");
    const totalSlides = slides.length;

    function showSlide(index) {
        // Check if Slide is out of bounds
        if (index < 0 || index >= totalSlides) {
            console.warn("Slide index out of bounds:", index)
            document.body.innerHTML = "End of Presentation"
            return
        }

        currentSlide = index // Update currentSlide only if within bounds

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none"
        })

        // Show the current slide
        slides[currentSlide].style.display = "block"
    }

    // Show the first slide
    showSlide(currentSlide)

    document.onkeydown = function (e) {
        switch (e.key) {
            case "ArrowRight":
                showSlide(currentSlide + 1)
                break;

            case "ArrowLeft":
                showSlide(currentSlide - 1)
                break;
        }
    }
})

function addSlideFeature(feature) {
    document.querySelectorAll(".slides section").forEach(slide => {
        slide.classList.add(feature);
    });
}

if (SSS_CENTER_SLIDE_CONTENT) {
    addSlideFeature("CENTER_SLIDE_CONTENT");
    console.log("SSS_CENTER_SLIDE_CONTENT is set");
}
