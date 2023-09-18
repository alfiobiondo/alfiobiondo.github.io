let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-container");
let icon = document.querySelector(".fa-bars");
let logo = document.querySelector(".logo");
let navLinks = document.querySelector(".nav-links");
let socialMedia = document.querySelector(".social-media-icons");
let header = document.querySelector(".jumbotron-container");
let jumbotron = document.querySelector(".jumbotron");
let greetings = document.querySelector(".greetings");
let mailButton = document.querySelector(".mail-button");
let scrollElements = document.querySelectorAll(".js-scroll");

//const menuElements = [menu, logo, navLinks, socialMedia];

let mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var viewport = window.matchMedia("(max-width: 650px)")
var viewportFull = window.matchMedia("(min-width: 801px)")

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

//initialize throttleTimer as false 
let throttleTimer = false;

const throttle = (callback, time) => {
    //don't run the function while throttle timer is true 
    if (throttleTimer) return;
    
    //first set throttle timer to true so the function doesn't run 
    throttleTimer = true;
    
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
	}, time);
}

//Detecting When an Element Is in View
/* const scrollOffset = 100; */

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) / dividend)
  );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
}

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
}

window.addEventListener("scroll", () => {
    //check if mediaQuery exists and if the value for mediaQuery does not match 'reduce', return the scrollAnimation. 
    if (mediaQuery && !mediaQuery.matches) {
      handleScrollAnimation()
    }
});

window.addEventListener("scroll", () => {
    throttle(handleScrollAnimation, 250);
})

//slider Header
let cloneHeaderalreadyExists = false;


const handleMove = e => {   
    if (viewportFull.matches) {const cloneHeader = () => {
        if (cloneHeaderalreadyExists == true) {
            return;
        } else {
            let headerClone = header.cloneNode(true);
            headerClone.classList.replace("jumbotron-container", "header-clone");
            header.after(headerClone);
            cloneHeaderalreadyExists = true;
        }
    } 
    cloneHeader();
    header.style.width = `${e.clientX / window.innerWidth * 100}%`;
    } else {
        return;
    } 
}

setTimeout(() => {document.onmousemove = e => handleMove(e)}, 2000);
/* document.ontouchmove = e => handleMove(e); */
// document.onmousemove = e => cloneHeader(e);
// document.ontouchmove = e => cloneHeader(e);

//same height of all elements inside the info-cards

/* let doThings = [...document.querySelectorAll('.do-things')];
let summary = [...document.querySelectorAll('.summary')];
let skillTools = [...document.querySelectorAll('.skill-tools')]; */

// determine the maximum of all heights
/* let doThingsHeights = doThings.map((e) => e.offsetHeight);
let summaryHeights = summary.map((e) => e.offsetHeight);
let skillToolHeights = skillTools.map((e) => e.offsetHeight);
let maxDoThingsHeight = Math.max(...doThingsHeights);
let maxSummaryHeights = Math.max(...summaryHeights);
let maxSkillToolHeights = Math.max(...skillToolHeights); */

// set the all heights to the minimum value
/* doThings.forEach((e) => e.style.minHeight = `${maxDoThingsHeight}px`);
summary.forEach((e) => e.style.minHeight = `calc(${maxSummaryHeights}px + 3%)`);
skillTools.forEach((e) => e.style.minHeight = `${maxSkillToolHeights}px`); */

const emailAddress = "alfiobiondo@icloud.com";

if (mailButton) {
    mailButton.addEventListener("click", () => {
        window.open(`mailto:${emailAddress}`, '_blank');
    })
}