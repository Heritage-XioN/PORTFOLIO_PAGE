

const menuBtn = document.getElementById("toggleMenu")
const menu = document.getElementById("menu")
menuBtn.addEventListener("click", event => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none" ;
  
})