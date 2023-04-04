const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const video = document.getElementById("videoProduct");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function switchView(name) {
    if (name != "projectDetail") {
        video.pause();
    }
    $("#start, #startDetail, #intro, #contact, #project, #projectDetail").hide();
    $("#" + name).show();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 0) {
        // I am using 'display' instead of 'top':
        closeMenu();
    }
}

