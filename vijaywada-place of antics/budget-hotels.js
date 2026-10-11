
document.addEventListener("DOMContentLoaded", () => {
    // Smoothly scroll to the hotel list.
    const exploreButton = document.querySelector(".hero-button");

    if (exploreButton) {
        exploreButton.addEventListener("click", (event) => {
            const target = document.querySelector("#hotels");

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // Add a subtle reveal effect as hotel cards enter the viewport.
    const hotelCards = document.querySelectorAll(".hotel-card");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        hotelCards.forEach((card) => {
            card.classList.add("reveal");
            observer.observe(card);
        });
    }
});
