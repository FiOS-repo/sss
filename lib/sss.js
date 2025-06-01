document.addEventListener("DOMContentLoaded", function () {
    var currentSlide = 0;
    const slides = document.querySelectorAll(".slides section");
    const totalSlides = slides.length;

    if (SSS_SLIDE_NUMBER) {
        var slidenumber = document.createElement("p");
        slidenumber.id = "slidenumber";
        slidenumber.innerText = currentSlide + 1;
        document.body.appendChild(slidenumber);
        console.log("SSS_SLIDE_NUMBER is set");
    }

    function showSlide(index) {
        if (SSS_PROGRESS_BAR) {
            document.getElementById("progress").style.width = (100 / totalSlides) * index + "%";
        }

        if (SSS_SLIDE_NUMBER && document.getElementById("slidenumber")) {
            document.getElementById("slidenumber").innerText = index + 1;
        }

        const slideClasses = slides[Math.max(0, Math.min(index, totalSlides - 1))].className.split(" ");
        const bgClass = slideClasses.find(cls => cls.startsWith("bg-"));

        if (SSS_BG_FADE) {
            var fadeTime = (typeof SSS_BG_FADE_TIME !== 'undefined' && !isNaN(SSS_BG_FADE_TIME)) ? SSS_BG_FADE_TIME : 1;
            document.body.style.transition = "background-color " + fadeTime + "s";
            console.log("SSS_BG_FADE is set");
            if (typeof SSS_BG_FADE_TIME === 'undefined' || isNaN(SSS_BG_FADE_TIME)) {
                console.log("SSS_BG_FADE_TIME is not defined. Defaulting to 1");
            }
        }

        if (bgClass) {
            document.body.style.backgroundColor = bgClass.slice(3);
        } else {
            document.body.style.backgroundColor = "";
        }

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
            if (SSS_SLIDE_NUMBER && document.getElementById("slidenumber")) {
                document.getElementById("slidenumber").innerText = "";
            }
            if (SSS_PROGRESS_BAR && document.getElementById("progress")) {
                document.getElementById("progress").style.width = "100%";
            }
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
    };

    document.querySelectorAll('span').forEach(span => {
        if (span.textContent.trim().length === 1) {
            span.classList.add('square-letter');
        }
    });
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

if (SSS_TITLE) {
    document.title = SSS_TITLE;
    console.log("SSS_TITLE is set");
}
