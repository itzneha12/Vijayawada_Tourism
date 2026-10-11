
document.addEventListener("DOMContentLoaded", () => {
    // Smoothly navigate to page sections.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Show a helpful fallback if the local temple image is missing.
    document.querySelectorAll(".hero-image, .experience-image img")
        .forEach((img) => {
            img.addEventListener("error", () => {
                img.style.display = "none";
                img.parentElement.style.background =
                    "linear-gradient(135deg, #8b7355, #332c24)";
            });
        });
});
