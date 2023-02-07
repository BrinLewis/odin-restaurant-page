function loadHomePage() {
  const content = document.querySelector(".content");

  const homePage = document.createElement("div");
  homePage.setAttribute("id", "home-page");
  content.appendChild(homePage);

  // Create img element
  const pizzaImg = document.createElement("img");
  pizzaImg.setAttribute("id", "pizzaImg");
  pizzaImg.setAttribute("alt", "Cartoon Pizza Outline");
  pizzaImg.src = "./images/pizza-logo.svg";
  homePage.appendChild(pizzaImg);

  // Create info
  const title = document.createElement("h1");
  title.setAttribute("id", "title");
  title.textContent = "Odin's Fakeria";
  homePage.appendChild(title);

  const timesHeading = document.createElement("h2");
  timesHeading.setAttribute("id", "opening-hours-heading");
  timesHeading.textContent = "Opening Hours";
  homePage.appendChild(timesHeading);

  // Loop creates 2 divs with the same classname and numbered id without code repetition
  for (let i = 0; i < 2; i++) {
    let timesContainer = document.createElement("div");
    timesContainer.classList.add("opening-hours-container");
    timesContainer.setAttribute("id", `times-cont-${i + 1}`);
    homePage.appendChild(timesContainer);
  }

  // Use the div's numbered id's to append the correct h3 elements to them
  const timesContainerOne = document.getElementById("times-cont-1");
  const weekdays = document.createElement("h3");
  weekdays.textContent = "Brinsday - Greenday";
  timesContainerOne.appendChild(weekdays);

  const weekdayTimes = document.createElement("h3");
  weekdayTimes.textContent = "09:00am - 22:00pm";
  timesContainerOne.appendChild(weekdayTimes);

  const timesContainerTwo = document.getElementById("times-cont-2");
  const weekends = document.createElement("h3");
  weekends.textContent = "Weekends";
  timesContainerTwo.appendChild(weekends);

  const weekendTimes = document.createElement("h3");
  weekendTimes.textContent = "10:00am - 23:00pm";
  timesContainerTwo.appendChild(weekendTimes);

  // Create book table button
  const bookBtn = document.createElement("button");
  bookBtn.setAttribute("type", "button");
  bookBtn.classList.add("btn");
  bookBtn.textContent = "Book Table";
  homePage.appendChild(bookBtn);
}

export { loadHomePage };
