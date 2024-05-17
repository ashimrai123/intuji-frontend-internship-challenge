const sidebar = document.getElementById("sidebar")!;
const navbarForHide = document.getElementById("navbar")!;
sidebar.style.left = "-23rem";
sidebar.style.transition = " 0.3s";

let toggleValue: boolean = false;

const hamburger = document.getElementById("hamburger")!;
const handlingSidebar = document.getElementById("sidebarCross");
function toggleSidebar() {
  if (!toggleValue) {
    sidebar.style.left = "0";
    toggleValue = true;
    navbarForHide.style.top = "-20rem";
  } else {
    sidebar.style.left = "-30rem";
    toggleValue = false;
    navbarForHide.style.top = "0";
  }
}
hamburger.addEventListener("click", toggleSidebar);
handlingSidebar?.addEventListener("click", toggleSidebar);

//Close the sidebar when we click outside the sidebar considering click on hamburger menu
document.addEventListener("click", (event) => {
  let target = event.target as Node;
  const isClickInsideSidebar = sidebar.contains(target);
  const isClickInsideHamburger = hamburger.contains(target);
  if (!isClickInsideSidebar && toggleValue && !isClickInsideHamburger) {
    sidebar.style.left = "-30rem";
    navbarForHide.style.top = "0";
  }
});
