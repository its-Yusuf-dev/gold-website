
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    const consent = document.getElementById("consent").checked;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formMessage.style.color = "red";

    if (!name || !email || !phone || !subject || !message) {

        formMessage.textContent = "Please complete all required fields.";

        return;

    }

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        return;

    }

    if (!consent) {

        formMessage.textContent = "Please agree to be contacted.";

        return;

    }

    // No backend is connected yet.
    // Do not display a false submission success message.

    formMessage.style.color = "#a07832";

    formMessage.textContent =
        "Your enquiry is validated, but the contact form is not connected to an email service yet.";

});


// SIMPLE SCROLL REVEAL

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".value-card, .product-card, .intro-content, .why-content"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
