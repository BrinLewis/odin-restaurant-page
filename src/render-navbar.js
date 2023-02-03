function renderNav () {
  const header = document.querySelector(".header");

  // Create logo
  const logo = document.createElement("p");
  logo.classList.add("logo");
  logo.textContent = "Odin's";
  header.appendChild(logo);

  // Create nav-bar
  const nav = document.createElement("nav");
  header.appendChild(nav);
  const navItems = document.createElement("ul");
  nav.appendChild(navItems);

  // Create items for nav-bar
  const aboutBtn = document.createElement("li");
  aboutBtn.textContent = "About";
  navItems.appendChild(aboutBtn);
  const homeBtn = document.createElement("li");
  homeBtn.textContent = "Home";
  navItems.appendChild(homeBtn);
  const menuBtn = document.createElement("li");
  menuBtn.textContent = "Menu";
  navItems.appendChild(menuBtn);
};

export { renderNav };