function loadHomePage () {
  const content = document.querySelector(".content");

  // Create img element
  const pizzaImg = document.createElement("img");
  pizzaImg.setAttribute("id", "pizzaImg");
  pizzaImg.setAttribute("alt", "Cartoon Pizza Outline");
  content.appendChild(pizzaImg);
};

export { loadHomePage };