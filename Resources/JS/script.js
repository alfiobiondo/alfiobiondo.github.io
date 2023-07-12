let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-container");

var viewport = window.matchMedia("(min-width: 481px) and (max-width: 767px)")

// Display links onClick on Hamburger
hamburger.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
    menu.classList.toggle("toggle-function-sb");
    }
});
