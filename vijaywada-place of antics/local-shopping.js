
document.addEventListener("DOMContentLoaded", () => {

    // Provide a simple visual fallback if a local image is missing.
    document.querySelectorAll(".shopping-image img").forEach((img) => {

        img.addEventListener("error", () => {
            img.style.display = "none";
            img.parentElement.style.background =
                "linear-gradient(135deg, #e6ded3, #cbb9a5)";
        });

    });

});
