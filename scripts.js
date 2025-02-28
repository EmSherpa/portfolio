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


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const responseMessage = document.getElementById("form-response");

    fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                responseMessage.textContent = "Message sent successfully!";
                responseMessage.style.color = "green";
                this.reset(); // Clear the form
            } else {
                responseMessage.textContent = "Failed to send message. Please try again.";
                responseMessage.style.color = "red";
            }
        })
        .catch((error) => {
            responseMessage.textContent = "An error occurred. Please try again.";
            responseMessage.style.color = "red";
        });
});