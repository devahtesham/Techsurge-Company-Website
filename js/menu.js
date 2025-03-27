// mob menu

const mobMenu = document.getElementById('mob-menu');
const mobMenuWrapper = document.getElementById('mob-nav-wrapper');
const corssMenu = document.getElementById('cross-menu');

if (mobMenu) {
    mobMenu.addEventListener("click", (e) => {
        if (mobMenuWrapper) mobMenuWrapper.classList.add('show')

    })
}

if (corssMenu) {
    corssMenu.addEventListener("click", (e) => {
        if (mobMenuWrapper) mobMenuWrapper.classList.remove('show')

    })
}

const getInTouchBtn = document.querySelector(".get-in-touch-btn");
if (getInTouchBtn) {
    getInTouchBtn.addEventListener("click", () => {
        window.open('/contact.html')
    })
}

// const learnMoreBtns = document.querySelectorAll(".learn-more");
// if (learnMoreBtns.length) {
//     learnMoreBtns.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             window.open('/about.html')
//         })
//     })

// }
if (getInTouchBtn) {
    getInTouchBtn.addEventListener("click", () => {
        window.open('/contact.html')
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const servicesContentSections = document.querySelectorAll(".service-item");
    const allServiceImages = document.querySelector(".all-services-images");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const serviceId = entry.target.getAttribute('id');
            const currentServiceImg = allServiceImages.querySelector(`.${serviceId}`);
            if(serviceId !== 'mob-app-img'){
                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    currentServiceImg.style.transform = "translate(0)";
                    currentServiceImg.style.zIndex = 2;
                }else{
                    currentServiceImg.style.transform = "translate(0px, 900px)";
                    currentServiceImg.style.zIndex = 1;
                }
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -100% 0px" });

    servicesContentSections.forEach(section => observer.observe(section));
});



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
