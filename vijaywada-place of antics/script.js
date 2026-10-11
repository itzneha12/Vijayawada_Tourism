/* =========================================================
   VIJAYAWADA TOURISM
   MAIN JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* ================= SCROLL ANIMATIONS ================= */

const animatedElements = document.querySelectorAll(
    ".time-card, .place-card, .food-card, .shopping-card, .hotel-card"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ================= FOOD FILTER ================= */

const priceButtons = document.querySelectorAll(".price-button");
const foodCards = document.querySelectorAll(".food-card");


priceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPrice = button.dataset.price;


        priceButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        foodCards.forEach(card => {

            const cardPrice = card.dataset.price;


            if (
                selectedPrice === "all" ||
                selectedPrice === cardPrice
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= TRIP PLANNER ================= */

const dayButtons = document.querySelectorAll(
    ".planner-buttons button"
);

const interestButtons = document.querySelectorAll(
    ".interest-buttons button"
);


let selectedDays = null;
let selectedInterests = [];


dayButtons.forEach(button => {

    button.addEventListener("click", () => {

        dayButtons.forEach(btn => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

        selectedDays = button.dataset.days;

    });

});


interestButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("selected");


        const interest =
            button.textContent.trim();


        if (
            selectedInterests.includes(interest)
        ) {

            selectedInterests =
                selectedInterests.filter(
                    item => item !== interest
                );

        } else {

            selectedInterests.push(interest);

        }

    });

});


/* ================= GENERATE TRIP ================= */

const generateButton =
    document.getElementById("generatePlan");


generateButton.addEventListener("click", () => {

    if (!selectedDays) {

        alert(
            "Please choose how many days you are staying!"
        );

        return;

    }


    if (selectedInterests.length === 0) {

        alert(
            "Choose at least one interest!"
        );

        return;

    }


    let planMessage = "";


    if (selectedDays === "1") {

        planMessage =
            "🌅 Morning: Kanaka Durga Temple\n" +
            "☀️ Afternoon: Undavalli Caves + lunch\n" +
            "🌇 Evening: Prakasam Barrage\n" +
            "🌙 Night: Food + shopping";

    }


    if (selectedDays === "2") {

        planMessage =
            "DAY 1\n" +
            "🛕 Kanaka Durga Temple\n" +
            "🏛️ Undavalli Caves\n" +
            "🌇 Prakasam Barrage\n\n" +

            "DAY 2\n" +
            "🏰 Kondapalli Fort\n" +
            "🛍️ Shopping\n" +
            "🍽️ Vijayawada food tour";

    }


    if (selectedDays === "3") {

        planMessage =
            "DAY 1 — CITY & TEMPLES\n" +
            "🛕 Kanaka Durga Temple\n" +
            "🌇 Prakasam Barrage\n\n" +

            "DAY 2 — HISTORY\n" +
            "🏛️ Undavalli Caves\n" +
            "🏰 Kondapalli Fort\n\n" +

            "DAY 3 — RELAX & EXPLORE\n" +
            "🌿 Bhavani Island\n" +
            "🛍️ Shopping\n" +
            "🍽️ Food tour";

    }


    alert(
        "✨ YOUR VIJAYAWADA PLAN ✨\n\n" +
        planMessage
    );

});