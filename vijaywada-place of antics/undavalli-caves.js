/* =========================================================
   UNDAVALLI CAVES PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ================= SCROLL REVEAL ================= */

        const revealItems =
            document.querySelectorAll(
                ".info-card, .highlight-card, .look-item, .visitor-item, .nearby-card"
            );


        revealItems.forEach(item => {

            item.style.opacity = "0";

            item.style.transform =
                "translateY(25px)";

            item.style.transition =
                "opacity .6s ease, transform .6s ease";

        });


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(item => {

            observer.observe(item);

        });


        /* ================= HERO PARALLAX ================= */

        const heroImage =
            document.querySelector(
                ".hero-image"
            );


        window.addEventListener(
            "scroll",
            () => {

                if (!heroImage) return;


                const scroll =
                    window.scrollY;


                if (
                    scroll <
                    window.innerHeight
                ) {

                    heroImage.style.transform =
                        `translateY(${scroll * 0.12}px)`;

                }

            }
        );

    }
);