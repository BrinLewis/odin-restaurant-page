import "./styles.css"
import { renderFoundations } from "./render-foundations";
import { loadHomePage } from "./home-page";

renderFoundations();
loadHomePage();
highlightNavBtn("home");

function clearContent() {
  const content = document.querySelector(".content");

  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

function highlightNavBtn (currentPage) {
  const navItems = document.querySelectorAll(".nav-btn");
  navItems.forEach(el => {
    el.classList.remove("current-page");
  });
  const currentNavItem = document.getElementById(`${currentPage}-btn`);
  currentNavItem.classList.add("current-page");
};

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
  clearContent();
  // loadAboutPage();
  highlightNavBtn("about");
});

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHomePage();
  highlightNavBtn("home");
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  clearContent();
  // loadMenuPage();
  highlightNavBtn("menu");
});