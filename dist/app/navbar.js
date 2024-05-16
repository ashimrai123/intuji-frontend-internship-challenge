//Display white background in navbar when we have scrolled a little Y distance
var header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header === null || header === void 0 ? void 0 : header.classList.add("header__white");
        header === null || header === void 0 ? void 0 : header.classList.remove("header__transparent");
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.add("header__transparent");
        header === null || header === void 0 ? void 0 : header.classList.remove("header__white");
    }
});
var lastScrollTop = 0;
var yOffsetThreshold = 100;
window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > yOffsetThreshold) {
        //Scroll down
        header === null || header === void 0 ? void 0 : header.classList.add("header__hidden");
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove("header__hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
