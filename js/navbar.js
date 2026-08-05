const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const desktopNav = document.getElementById("desktopNav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

menuToggle.addEventListener("click", () => {

    desktopNav.classList.toggle("active");

});