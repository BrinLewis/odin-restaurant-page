function loadMenuPage() {
  const content = document.querySelector(".content");

  // Create main container
  const menuPageContainer = document.createElement("div");
  menuPageContainer.setAttribute("id", "menu-page");
  content.appendChild(menuPageContainer);

  // Create title section
  const logo = document.createElement("img");
  logo.setAttribute("id", "pizza-img-70px");
  logo.setAttribute("alt", "Cartoon Pizza Outline");
  logo.src = "./images/pizza-logo.svg";
  menuPageContainer.appendChild(logo);

  const title = document.createElement("h1");
  title.setAttribute("id", "menu-title");
  title.textContent = "Odin's Fakeria";
  menuPageContainer.appendChild(title);

  const menuText = document.createElement("h2");
  menuText.setAttribute("id", "menu-main-header");
  menuText.textContent = "Menu";
  menuPageContainer.appendChild(menuText);

  // Create mains section
  const mainsHeader = document.createElement("h3");
  mainsHeader.classList.add("menu-section-header");
  mainsHeader.textContent = "Mains";
  menuPageContainer.appendChild(mainsHeader);

  const mainsContainer = document.createElement("div");
  mainsContainer.setAttribute("id", "mains-container");
  menuPageContainer.appendChild(mainsContainer);

  // Create desserts section
  const dessertsHeader = document.createElement("h3");
  dessertsHeader.classList.add("menu-section-header");
  dessertsHeader.textContent = "Desserts";
  menuPageContainer.appendChild(dessertsHeader);

  const dessertsContainer = document.createElement("div");
  dessertsContainer.setAttribute("id", "desserts-container");
  menuPageContainer.appendChild(dessertsContainer);

  // Create menu item function
  function createMenuItem(name, description, sectionContainer) {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    sectionContainer.appendChild(item);

    const itemName = document.createElement("p");
    itemName.textContent = name;
    item.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = "£0.00";
    item.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    item.appendChild(itemDescription);
  }

  // Create mains items
  createMenuItem(
    "Rib-eye Fake",
    "The finest meat money can't buy, covered in no sauce with a side of invisible potatoes.",
    mainsContainer
  );

  createMenuItem(
    "Fakeonara",
    "A deliciously creamy spaghetti fakeonara with facon and no chicken.",
    mainsContainer
  );

  createMenuItem(
    "Pepperphoni Pizza",
    "0 inch pizza with mockerella cheese, invisible sauce and scattered with pepperphoni",
    mainsContainer
  );

  createMenuItem(
    "Beyond-real Burger",
    "A juicy buger made from non-existant beef with mockery jack cheese, all in our own sham bun.",
    mainsContainer
  );

  createMenuItem(
    "Not-dog",
    "Our infamous not-dog with your choice of sauces. Choose from faketchup, shamayo and mustard (ew).",
    mainsContainer
  );

  createMenuItem(
    "Ice Cream",
    "Yeah, you heard me, ice cream for dinner. Nobody can tell you what to do ...except us because we don't have ice cream.",
    mainsContainer
  );

  // Create dessert items
  createMenuItem(
    "Bogus Brownies",
    "Chocolately, fudgy, not real. These brownies would be so tasty if they actually existed!",
    dessertsContainer
  );

  createMenuItem(
    "Pretend Profiteroles",
    "Faux pastry balls filled with dream cream and covered in thin air",
    dessertsContainer
  );
}

export { loadMenuPage };
