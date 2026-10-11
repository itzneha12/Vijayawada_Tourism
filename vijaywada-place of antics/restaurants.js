document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       SCROLL REVEAL
    ============================== */

    const revealElements = document.querySelectorAll(
        ".restaurant-item, .occasion-card"
    );

    // Show content immediately if reduced motion is preferred
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {

        revealElements.forEach((element) => {
            element.classList.add("show");
        });

    } else {

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
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    }


    /* ==============================
       HERO PARALLAX
    ============================== */

    const heroImage = document.querySelector(".category-image");

    if (heroImage && !reduceMotion) {

        let ticking = false;

        window.addEventListener("scroll", () => {

            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(() => {

                const scrollAmount = window.scrollY;

                if (scrollAmount < window.innerHeight) {

                    heroImage.style.transform =
                        `scale(1.05) translateY(${scrollAmount * 0.12}px)`;

                }

                ticking = false;

            });

        }, { passive: true });

    }


    /* ==============================
       IMAGE FALLBACK
    ============================== */

    const images = document.querySelectorAll(
        ".category-image, .restaurant-image"
    );

    images.forEach((element) => {

        const backgroundImage =
            getComputedStyle(element).backgroundImage;

        const match = backgroundImage.match(
            /url\(["']?(.*?)["']?\)/
        );

        if (!match || !match[1]) return;

        const image = new Image();

        image.onerror = () => {
            element.classList.add("image-missing");
        };

        image.src = match[1];

    });

});