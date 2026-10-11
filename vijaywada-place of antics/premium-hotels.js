
document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.querySelector(".hero-button");
    const hotelSection = document.querySelector("#hotels");

    if (exploreButton && hotelSection) {
        exploreButton.addEventListener("click", (event) => {
            event.preventDefault();

            hotelSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    const cards = document.querySelectorAll(".hotel-card");

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

        cards.forEach((card) => {
            card.classList.add("reveal");
            observer.observe(card);
        });
    }
});
