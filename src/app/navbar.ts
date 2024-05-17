//Display white background in navbar when we have scrolled a little Y distance
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar?.classList.add("navbar__white");
    navbar?.classList.remove("navbar__transparent");
  } else {
    navbar?.classList.add("navbar__transparent");
    navbar?.classList.remove("navbar__white");
  }
});

let lastScrollTop = 0;
let yOffsetThreshold = 100;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > yOffsetThreshold) {
    //Scroll down
    navbar?.classList.add("navbar__hidden");
  } else {
    navbar?.classList.remove("navbar__hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
