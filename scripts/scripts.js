import { awards , services , portfolio , blog } from "./data.js"

// const menuBtn = document.getElementById("toggleMenu");
// const menu = document.getElementById("menu");
// const awardCard = document.getElementById("awardCard");




toggleMenu.addEventListener("click", event => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none" ;
})



services.forEach( item => 
{
  console.log(item)
  let html = `
  <div class="card_cont" id="card">
        <div class="card_body">
          <p class="card_num">${item.id}</p>
          <h5 class="title">
            <i class="fa-solid fa-code fa-2xl title_icon"></i>
            ${item.title}
          </h5>
          <p class="card-text">
            ${item.mainTxt}
          </p>
          </div>
        </div>
  `;
  servicesCard.innerHTML += html;
})

portfolio.forEach( item => 
{
  console.log(item)
  let html = `
  <div class="carousel-item ${item.isActive}">
    <div class="img_cont">
      <img src=${item.src} alt=${item.alt} class="carousel_img">
    </div>
    <div class="txt_cont">
      <p class="carousel_title">
        ${item.title}
      </p>
      <p class="carousel_header">
        ${item.headerTxt}
      </p>
   </div>
  </div>
 `;
  carousel_portfolio.innerHTML += html;
})


awards.forEach( item => 
{
  console.log(item)
  let html = `
  <div class="card_cont" id="card">
        <div class="card_body">
          <p class="card_num">${item.id}</p>
          <h5 class="title">
            <i class="fa-solid fa-code fa-2xl title_icon"></i>
            ${item.title}
          </h5>
          <p class="card-text">
            ${item.mainTxt}
          </p>
        </div>
      </div>
  `;
  awardCard.innerHTML += html;
})

blog.forEach( item => 
{
  console.log(item)
  let html = `
  <div class="carousel-item ${item.isActive}">
    <div class="img_cont">
      <img src=${item.src} alt=${item.alt} class="carousel_img">
    </div>
    <div class="txt_cont">
      <p class="carousel_title">
        ${item.title}
      </p>
      <p class="carousel_header">
        ${item.headerTxt}
      </p>
   </div>
  </div>
 `;
  carousel_blog.innerHTML += html;
})