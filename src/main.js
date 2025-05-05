// Theme toggle
const html = document.querySelector("html");
const themeToggle = document.querySelectorAll("#theme__switch");
// This code toggles the dark mode class on the html element when the theme toggle button is clicked
themeToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
  });
});

// mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("translate-y-0");
});
