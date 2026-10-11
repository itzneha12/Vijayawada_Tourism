document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       SCROLL REVEAL
    ============================== */

    const elements = document.querySelectorAll(
        ".cafe-item, .vibe-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });


    /* ==============================
       HERO PARALLAX
    ============================== */

    const heroImage = document.querySelector(".category-image");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            const scrollAmount = window.scrollY;

            if (scrollAmount < window.innerHeight) {

                heroImage.style.transform =
                    `scale(1.05) translateY(${scrollAmount * 0.12}px)`;

            }

        });

    }


    /* ==============================
       IMAGE FALLBACK
    ============================== */

    const cafeImages = document.querySelectorAll(
        ".category-image, .cafe-image"
    );

    cafeImages.forEach((element) => {

        const backgroundImage =
            getComputedStyle(element).backgroundImage;

        const imageURL = backgroundImage
            .replace(/^url\(["']?/, "")
            .replace(/["']?\)$/, "");

        if (
            imageURL &&
            imageURL !== "none"
        ) {

            const image = new Image();

            image.onerror = () => {
                element.classList.add("image-missing");
            };

            image.src = imageURL;
        }

    });

});