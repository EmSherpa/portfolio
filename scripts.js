// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
