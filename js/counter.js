// Function to animate counters
function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 200; // Adjust speed by changing this value

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 15); // Adjust speed by changing delay
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// Function to check if section is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Event listener for scrolling
window.addEventListener("scroll", handleScroll);


function handleScroll(){
    const customerCountSec = document.querySelector("#customer-count-sec");
    if (isInViewport(customerCountSec)) {
        animateCounters();
        window.removeEventListener("scroll", handleScroll); // Run animation only once
    }
}
