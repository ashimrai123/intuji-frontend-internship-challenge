//Display white background in navbar when we have scrolled a little Y distance
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header?.classList.add("header__white");
    header?.classList.remove("header__transparent");
  } else {
    header?.classList.add("header__transparent");
    header?.classList.remove("header__white");
  }
});

let lastScrollTop = 0;
let yOffsetThreshold = 100;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > yOffsetThreshold) {
    //Scroll down
    header?.classList.add("header__hidden");
  } else {
    header?.classList.remove("header__hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
