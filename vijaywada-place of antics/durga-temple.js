/* =========================================================
   KANAKA DURGA TEMPLE PAGE
========================================================= */


/* ================= PAGE LOAD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    const sections =
        document.querySelectorAll(
            ".info-card, .darshan-card, .visitor-item, .nearby-card"
        );


    sections.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(25px)";

        item.style.transition =
            `opacity .6s ease ${index * 0.08}s,
             transform .6s ease ${index * 0.08}s`;

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

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


    sections.forEach(item => {

        observer.observe(item);

    });

});