document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides section");
    const totalSlides = slides.length;

    function showSlide(index) {
        const endmsg = document.getElementById("endmsg");
        if (endmsg) endmsg.remove();

        if (index < 0 || index >= totalSlides) {
            slides.forEach(slide => {
                slide.style.display = "none";
            });
            const endmsg = document.createElement("p");
            endmsg.innerHTML = "End of Presentation. Press <span>r</span> to restart";
            endmsg.id = "endmsg";
            document.body.appendChild(endmsg);
            return;
        }

        currentSlide = index;

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[currentSlide].style.display = "block";
    }

    showSlide(currentSlide);

    document.onkeydown = function (e) {
        switch (e.key) {
            case "ArrowRight":
                showSlide(currentSlide + 1);
                break;
            case "ArrowLeft":
                showSlide(currentSlide - 1);
                break;
            case "r":
                showSlide(0);
                break;
        }
    }
});

function addSlideFeature(feature) {
    document.querySelectorAll(".slides section").forEach(slide => {
        slide.classList.add(feature);
    });
}

if (SSS_CENTER_SLIDE_CONTENT) {
    addSlideFeature("CENTER_SLIDE_CONTENT");
    console.log("SSS_CENTER_SLIDE_CONTENT is set");
}
