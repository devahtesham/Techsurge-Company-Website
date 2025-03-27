// Track the last scroll position
let lastScrollPosition = 0;

// Function to handle scroll events
function handleHeaderOnScroll() {
    // console.log("i am running")
    const header = document.querySelector('header'); // Select your header element
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if we're at the top of the page
    if (currentScrollPosition === 0) {
        // Remove both classes when at top
        header.classList.remove('scroll-up');
        header.classList.remove('scroll-down');
        return;
    }

    // Compare current scroll position with last scroll position
    if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up
        header.classList.add('scroll-up');
        header.classList.remove('scroll-down');
    } else {
        // Scrolling down
        header.classList.add('scroll-down');
        header.classList.remove('scroll-up');
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
}

// Add scroll event listener
window.addEventListener('scroll', handleHeaderOnScroll);