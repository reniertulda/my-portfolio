// Automatically update the copyright year
const yearElements = document.querySelectorAll("#year");

yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
});


// Close the mobile navigation menu after clicking a link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {
            const collapse = new bootstrap.Collapse(navbarCollapse);
            collapse.hide();
        }

    });
});