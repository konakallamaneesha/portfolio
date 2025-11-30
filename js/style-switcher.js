const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const alternateStyles = document.querySelectorAll(".alternate-style");

// Toggle style switcher
if (styleSwitcherToggler) {
  styleSwitcherToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });
}

// Set active style
function setActiveStyle(color) {
  alternateStyles.forEach(style => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Day/Night mode toggle
const dayNight = document.querySelector(".day-night");
if (dayNight) {
  dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
  });
}

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher.open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});