var sidebar = document.getElementById("sidebar");
var navbarForHide = document.getElementById("navbar");
sidebar.style.left = "-23rem";
sidebar.style.transition = " 0.3s";
var toggleValue = false;
var hamburger = document.getElementById("hamburger");
var handlingSidebar = document.getElementById("sidebarCross");
function toggleSidebar() {
    if (!toggleValue) {
        sidebar.style.left = "0";
        toggleValue = true;
        navbarForHide.style.top = "-20rem";
    }
    else {
        sidebar.style.left = "-30rem";
        toggleValue = false;
        navbarForHide.style.top = "0";
    }
}
hamburger.addEventListener("click", toggleSidebar);
handlingSidebar === null || handlingSidebar === void 0 ? void 0 : handlingSidebar.addEventListener("click", toggleSidebar);
//Close the sidebar when we click outside the sidebar considering click on hamburger menu
document.addEventListener("click", function (event) {
    var target = event.target;
    var isClickInsideSidebar = sidebar.contains(target);
    var isClickInsideHamburger = hamburger.contains(target);
    if (!isClickInsideSidebar && toggleValue && !isClickInsideHamburger) {
        sidebar.style.left = "-30rem";
        navbarForHide.style.top = "0";
    }
});
