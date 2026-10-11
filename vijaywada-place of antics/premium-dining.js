
// ==========================
// FINE DINING PAGE
// ==========================


// 1. FILTER DINING CARDS

const filterButtons = document.querySelectorAll(".filter-btn");
const diningCards = document.querySelectorAll(".dining-card");
const noResults = document.getElementById("no-results");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Update active filter button
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;
        let visibleCount = 0;

        // Show cards matching the selected category
        diningCards.forEach((card) => {

            const cardCategory = card.dataset.category;

            const shouldShow =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            if (shouldShow) {
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }

        });

        // Display a message if no cards match
        if (noResults) {
            noResults.classList.toggle(
                "show",
                visibleCount === 0
            );
        }

    });

});


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


// 3. SMOOTH SCROLL FOR INTERNAL LINKS

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

