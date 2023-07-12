let hamburger = document.querySelector(".hamburger");
let navLinks = document.getElementById("nav-links")
let links = document.querySelectorAll(".links");
let menu = document.querySelector(".nav-container");

var viewport = window.matchMedia("(max-width: 700px)")

// Display links onClick on Hamburger
hamburger.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
    menu.classList.toggle("toggle-function-sb");
    }
});

// Hide navLink Container onClick any single link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        navLinks.classList.toggle("hide");
    });
}