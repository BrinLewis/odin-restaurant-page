import "./styles.css"
import restaurantImg from "./assets/restaurant.jpg";
import { renderFoundations } from "./render-foundations";
import { loadHomePage } from "./home-page";
import pizzaLogo from "./assets/pizza-logo.svg";

renderFoundations();
loadHomePage();
backgroundImg.src = restaurantImg;
pizzaImg.src = pizzaLogo;

// import home-page.js and call loadHomePage function
// import menu-page.js and call loadMenuPage function
// import about-page.js and call loadAboutPage function