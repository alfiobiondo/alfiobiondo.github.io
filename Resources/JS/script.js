let hamburger = document.querySelector(".hamburger");
let icon = hamburger.querySelector(".fa-bar")
let menu = document.querySelector(".nav-container");
let logo = document.querySelector(".logo");
let navLinks = document.querySelector(".nav-links");
let socialMedia = document.querySelector(".social-media-icons")
const menuElements = [menu, logo, navLinks, socialMedia];

var viewport = window.matchMedia("(max-width: 650px)")

// Display menu onClick on Hamburger
icon.addEventListener("click", () => {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-times", "fa-xmark");
    }
});

// Display menu onClick on Hamburger
hamburger.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");      
    } else {
        menu.classList.toggle("toggle-function-sb");
    };
});

//close menu onClick on Social media
/* socialMedia.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
    menu.classList.toggle("toggle-function-sb");
    }
}); */

//close menu onClick on nav links
/* navLinksLinks.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
    menu.classList.toggle("toggle-function-sb");
    }
}); */

//close menu onClick everywhere 
document.addEventListener('click', function handleClickOutsideMenu(event) {
    const cl = menu.classList;
    const clContain = cl.contains
        if (!menu.contains(event.target)) {
            if (viewport.matches) {
                menu.classList.toggle("toggle-function-dd");
            } else {
            menu.classList.toggle("toggle-function-sb");
            }
        }
});