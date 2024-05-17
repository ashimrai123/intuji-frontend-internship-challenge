//Display white background in navbar when we have scrolled a little Y distance
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("navbar__white");
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("navbar__transparent");
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("navbar__transparent");
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("navbar__white");
    }
});
var lastScrollTop = 0;
var yOffsetThreshold = 100;
window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > yOffsetThreshold) {
        //Scroll down
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("navbar__hidden");
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("navbar__hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
