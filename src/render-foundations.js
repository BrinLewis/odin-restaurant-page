function renderFoundations() {
  // Create Background Image
  const backgroundImg = document.createElement("img");
  backgroundImg.setAttribute("id", "backgroundImg");
  backgroundImg.setAttribute("alt", "Empty Modern Restaurant");
  document.body.appendChild(backgroundImg);

  // Assign Header
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

  // Create background image credits footer
  const photoCredit = document.createElement("p");
  photoCredit.classList.add("image-credits")

  const profileLink = document.createElement("a");
  profileLink.textContent = "Jason Leung"
  profileLink.setAttribute("href", "https://unsplash.com/@ninjason");
  const siteLink = document.createElement("a");
  siteLink.textContent = "Unsplash"
  siteLink.setAttribute("href", "https://unsplash.com/photos/poI7DelFiVA");

  const ptext1 = document.createTextNode("Photo by ");
  const ptext2 = document.createTextNode(" on ");

  photoCredit.appendChild(ptext1);
  photoCredit.appendChild(profileLink);
  photoCredit.appendChild(ptext2);
  photoCredit.appendChild(siteLink);

  document.body.appendChild(photoCredit);
}

export { renderFoundations };
