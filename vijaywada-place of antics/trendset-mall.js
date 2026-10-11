
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for links to sections on this page.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

    // Handle missing local images.
    document.querySelectorAll(".hero-image, .experience-image img")
        .forEach((img) => {

            img.addEventListener("error", () => {

                img.style.display = "none";

                img.parentElement.style.background =
                    "linear-gradient(135deg, #8c7562, #302a24)";

            });

        });

});
