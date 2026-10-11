/* =========================================================
   PRAKASAM BARRAGE PAGE
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ================= SCROLL REVEAL ================= */

        const revealItems =
            document.querySelectorAll(
                ".info-card, .experience-card, .visitor-item, .gallery-image, .nearby-card"
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


        /* ================= PARALLAX HERO ================= */

        const hero =
            document.querySelector(
                ".hero-image"
            );


        window.addEventListener(
            "scroll",
            () => {

                if (!hero) return;


                const scroll =
                    window.scrollY;


                if (scroll < window.innerHeight) {

                    hero.style.transform =
                        `translateY(${scroll * 0.15}px)`;

                }

            }
        );

    }
);