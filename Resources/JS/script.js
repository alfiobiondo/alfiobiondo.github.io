let hamburger = document.querySelector(".hamburger");
let navLinks = document.getElementById("nav-links")
let links = document.querySelectorAll(".links");
let sideBar = document.querySelector(".nav-container");

var viewport = window.matchMedia("(max-width: 700px)")

// Display links onClick on Hamburger
hamburger.addEventListener("click", () => {
    if (viewport.matches) {
        navLinks.classList.toggle("hide");
        hamburger.classList.toggle("lines-rotate");
    } else {
    sideBar.classList.toggle("toggle-function");
    }
});

// Hide navLink Container onClick any single link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        navLinks.classList.toggle("hide");
    });
}