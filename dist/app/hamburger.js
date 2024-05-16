var sidebar = document.getElementById("sidebar");
sidebar.style.left = "-23rem";
sidebar.style.transition = " 0.3s";
var toggleValue = false;
var hamburger = document.getElementById("hamburger");
var closeSidebar = document.getElementById("sidebarCross");
function toggleSidebar() {
    if (!toggleValue) {
        sidebar.style.left = "0";
        toggleValue = true;
    }
    else {
        sidebar.style.left = "-30rem";
        toggleValue = false;
    }
}
hamburger.addEventListener("click", toggleSidebar);
closeSidebar === null || closeSidebar === void 0 ? void 0 : closeSidebar.addEventListener("click", toggleSidebar);
