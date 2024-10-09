

const menuBtn = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const link = document.getElementById("link");
const icon = document.getElementById("icon");



menuBtn.addEventListener("click", event => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none" ;
})