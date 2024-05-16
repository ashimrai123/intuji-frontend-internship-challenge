const sidebar = document.getElementById("sidebar")!;
sidebar.style.left = "-23rem";
sidebar.style.transition = " 0.3s";

let toggleValue: boolean = false;

const hamburger = document.getElementById("hamburger")!;
const closeSidebar = document.getElementById("sidebarCross");
function toggleSidebar() {
  if (!toggleValue) {
    sidebar.style.left = "0";
    toggleValue = true;
  } else {
    sidebar.style.left = "-23rem";
    toggleValue = false;
  }
}
hamburger.addEventListener("click", toggleSidebar);
closeSidebar?.addEventListener("click", toggleSidebar);
