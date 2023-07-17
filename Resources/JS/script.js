let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-container");
let icon = document.querySelector(".fa-bars");
let logo = document.querySelector(".logo");
let navLinks = document.querySelector(".nav-links");
let socialMedia = document.querySelector(".social-media-icons")
const menuElements = [menu, logo, navLinks, socialMedia];

var viewport = window.matchMedia("(max-width: 650px)")

// Display menu onClick on Hamburger
hamburger.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");     
    } else {
        menu.classList.toggle("toggle-function-sb");
    };
});

hamburger.onclick = () => {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
};

//close menu onClick on Social media
socialMedia.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
        menu.classList.toggle("toggle-function-sb");
    }
});

//close menu onClick on nav links
/* navLinks.addEventListener("click", () => {
    if (viewport.matches) {
        menu.classList.toggle("toggle-function-dd");
    } else {
        menu.classList.toggle("toggle-function-sb");
    }
}); */

//close menu onClick everywhere if menu open
document.addEventListener('click', function handleClickOutsideMenu(event) {
    if (icon.classList.contains("fa-xmark")) {
        if (!menu.contains(event.target)) {
            if (viewport.matches) {
                menu.classList.toggle("toggle-function-dd");
                icon.classList.replace("fa-xmark", "fa-bars");
            } else {
                menu.classList.toggle("toggle-function-sb");
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        }
    }
});