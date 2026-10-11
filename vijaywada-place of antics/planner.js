
const durationButtons = document.querySelectorAll("[data-days]");
const interestButtons = document.querySelectorAll("[data-interest]");
const generateButton = document.getElementById("generatePlan");
const editButton = document.getElementById("editPlan");
const resultsSection = document.getElementById("results");
const itineraryContainer = document.getElementById("itinerary");
const resultsDescription = document.getElementById("resultsDescription");

let selectedDays = 1;
const selectedInterests = new Set(["Temples", "Food"]);

const places = [
    {
        name: "Kanaka Durga Temple",
        category: "Temples",
        time: "8:00 AM",
        description: "Visit Vijayawada's famous hilltop temple. Check current darshan timings before travelling."
    },
    {
        name: "ISKCON Vijayawada",
        category: "Temples",
        time: "10:00 AM",
        description: "Enjoy a peaceful visit to this spiritual centre."
    },
    {
        name: "Subrahmanya Swamy Temple",
        category: "Temples",
        time: "11:00 AM",
        description: "Include this religious landmark in your temple visits."
    },
    {
        name: "Venkateswara Swamy Temple",
        category: "Temples",
        time: "11:30 AM",
        description: "Visit this local place of worship."
    },
    {
        name: "Vijayawada Local Food",
        category: "Food",
        time: "1:00 PM",
        description: "Take a lunch break and try local Andhra dishes at a restaurant of your choice."
    },
    {
        name: "Eat Street",
        category: "Food",
        time: "7:00 PM",
        description: "Explore evening food stalls and enjoy a relaxed night-time food stop."
    },
    {
        name: "Krishna River & Prakasam Barrage",
        category: "Nature",
        time: "5:00 PM",
        description: "Enjoy the river views and spend some time around the waterfront."
    },
    {
        name: "Rajiv Gandhi Park",
        category: "Nature",
        time: "4:00 PM",
        description: "Take a relaxing break in this city park."
    },
    {
        name: "Gandhi Hill",
        category: "History",
        time: "3:30 PM",
        description: "Explore this Vijayawada landmark and enjoy the views."
    },
    {
        name: "City Shopping",
        category: "Shopping",
        time: "5:30 PM",
        description: "Browse local shops and shopping areas for souvenirs and everyday finds."
    }
];

const dayThemes = [
    "Discover the City",
    "Culture & Local Life",
    "Relax & Explore"
];

durationButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedDays = Number(button.dataset.days);

        durationButtons.forEach(item => {
            item.classList.toggle("active", item === button);
        });
    });
});

interestButtons.forEach(button => {
    button.addEventListener("click", () => {
        const interest = button.dataset.interest;

        if (selectedInterests.has(interest)) {
            selectedInterests.delete(interest);
            button.classList.remove("active");
        } else {
            selectedInterests.add(interest);
            button.classList.add("active");
        }
    });
});

function getSelectedPlaces(dayIndex) {
    const matchingPlaces = places.filter(place =>
        selectedInterests.has(place.category)
    );

    if (matchingPlaces.length === 0) {
        return [];
    }

    // Rotate the order slightly between days to provide variety.
    const rotation = (dayIndex * 2) % matchingPlaces.length;
    const rotatedPlaces = [
        ...matchingPlaces.slice(rotation),
        ...matchingPlaces.slice(0, rotation)
    ];

    // A manageable number of stops per day.
    return rotatedPlaces.slice(0, 4);
}

function createStop(place) {
    const stop = document.createElement("div");
    stop.className = "stop";

    const time = document.createElement("div");
    time.className = "stop-time";
    time.textContent = place.time;

    const details = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = place.name;

    const description = document.createElement("p");
    description.textContent = place.description;

    const tag = document.createElement("span");
    tag.className = "stop-tag";
    tag.textContent = place.category;

    details.append(heading, description, tag);
    stop.append(time, details);

    return stop;
}

function generateItinerary() {
    if (selectedInterests.size === 0) {
        alert("Please select at least one interest first.");
        return;
    }

    itineraryContainer.replaceChildren();

    const daysToPlan = selectedDays === 3 ? 3 : selectedDays;
    const durationText = selectedDays === 3 ? "3+ days" :
        `${selectedDays} ${selectedDays === 1 ? "day" : "days"}`;

    resultsDescription.textContent =
        `A suggested ${durationText} itinerary based on your interests.`;

    for (let day = 0; day < daysToPlan; day++) {
        const card = document.createElement("article");
        card.className = "day-card";

        const label = document.createElement("p");
        label.className = "day-label";
        label.textContent = `DAY ${day + 1}`;

        const heading = document.createElement("h3");
        heading.textContent = dayThemes[day];

        card.append(label, heading);

        const dayPlaces = getSelectedPlaces(day);

        if (dayPlaces.length === 0) {
            const message = document.createElement("p");
            message.textContent = "Choose your interests to see suggested places.";
            card.append(message);
        } else {
            dayPlaces.forEach(place => card.append(createStop(place)));
        }

        itineraryContainer.append(card);
    }

    resultsSection.hidden = false;
    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

generateButton.addEventListener("click", generateItinerary);

editButton.addEventListener("click", () => {
    resultsSection.hidden = true;
    document.querySelector(".planner-panel").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
