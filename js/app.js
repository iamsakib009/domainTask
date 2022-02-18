// ********** set date ************
// select span

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Theme
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// PreLoader
const loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
