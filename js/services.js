document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.querySelector(".toggle-container");
    const toggleSections = document.querySelectorAll("#toggle-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                toggleContainer.classList.add("toggle-dark");
            } else {
                toggleContainer.classList.remove("toggle-dark");
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -100% 0px" });

    toggleSections.forEach(section => observer.observe(section));
});
