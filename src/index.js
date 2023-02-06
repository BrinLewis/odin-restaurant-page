import "./styles.css"
import { renderFoundations } from "./render-foundations";
import { loadHomePage } from "./home-page";

renderFoundations();
loadHomePage();

function clearContent() {
  const content = document.querySelector(".content");

  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

// const aboutBtn = document.querySelector(".about-btn");
// aboutBtn.addEventListener("click", () => {
//   clearContent();
//   loadAboutPage();
// });

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

// const menuBtn = document.querySelector(".menu-btn");
// menuBtn.addEventListener("click", () => {
//   clearContent();
//   loadMenuPage();
// });


// import home-page.js and call loadHomePage function
// import menu-page.js and call loadMenuPage function
// import about-page.js and call loadAboutPage function