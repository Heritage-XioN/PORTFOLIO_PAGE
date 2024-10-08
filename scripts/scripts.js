

const menuBtn = document.getElementById("toggleMenu")
const menu = document.getElementById("menu")
menuBtn.addEventListener("click", event => {
  console.log(event.isTrusted)
  menu.style.display = menu.style.display === "none" ? "flex" : "none" ;
})