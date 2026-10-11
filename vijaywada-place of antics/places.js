/* =========================================================
   PLACES PAGE
========================================================= */


/* ================= FILTER SYSTEM ================= */

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".place-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");


        const selected =
            filter.dataset.filter;


        cards.forEach(card => {

            const categories =
                card.dataset.category;


            if (
                selected === "all" ||
                categories.includes(selected)
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0)";

                }, 20);

            }

            else {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(15px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});


/* ================= SCROLL REVEAL ================= */

const revealItems =
    document.querySelectorAll(
        ".place-card, .intro-grid"
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
            threshold: .1
        }
    );


revealItems.forEach(item => {

    observer.observe(item);

});