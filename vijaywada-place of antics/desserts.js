
// =================================
// DESSERTS PAGE JAVASCRIPT
// =================================

// Select all elements with reveal class
const revealItems = document.querySelectorAll(".reveal");

// Check if browser supports IntersectionObserver
if ("IntersectionObserver" in window) {
 
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {
                  entries.foreach
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

    // Observe every reveal element
    revealItems.forEach(function (item) {
        revealObserver.observe(item);
    });

} else {

    // Show everything if observer is unsupported
    revealItems.forEach(function (item) {
        item.classList.add("visible");
    });

}


// =================================
// SMOOTH SCROLL
// =================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

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