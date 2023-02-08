function loadAboutPage() {
  const content = document.querySelector(".content");

  // Create main container
  const aboutPage = document.createElement("div");
  aboutPage.setAttribute("id", "about-page");
  content.appendChild(aboutPage);

  // Create the three sections
  const findUsContainer = document.createElement("div");
  findUsContainer.classList.add("about-item");
  findUsContainer.setAttribute("id", "find-us-container");
  aboutPage.appendChild(findUsContainer);

  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.classList.add("about-item");
  aboutUsContainer.setAttribute("id", "about-us-container");
  aboutPage.appendChild(aboutUsContainer);

  const followUsContainer = document.createElement("div");
  followUsContainer.classList.add("about-item");
  followUsContainer.setAttribute("id", "follow-us-container");
  aboutPage.appendChild(followUsContainer);

  // Populate Find Us section
  const findUsTitle = document.createElement("h1");
  findUsTitle.textContent = "Find Us";
  findUsContainer.appendChild(findUsTitle);

  const findUsLocation = document.createElement("div");
  findUsContainer.appendChild(findUsLocation);

  const markerIcon = document.createElement("img");
  markerIcon.src = "./images/map-marker-outline.png";
  markerIcon.setAttribute("id", "map-marker-icon");
  findUsLocation.appendChild(markerIcon);

  const findUsText = document.createElement("p");
  findUsText.textContent = "Capital Boulevard. Los Santos, SA 69420";
  findUsLocation.appendChild(findUsText);

  const mapImg = document.createElement("img");
  mapImg.setAttribute("id", "location-img");
  mapImg.setAttribute("alt", "Fake location on GTA V map");
  mapImg.src = "./images/maplocation.png";
  findUsContainer.appendChild(mapImg);

  // Populate About Us section
  const pizzaImg = document.createElement("img");
  pizzaImg.setAttribute("id", "pizza-img-90px");
  pizzaImg.setAttribute("alt", "Cartoon Pizza Outline");
  pizzaImg.src = "./images/pizza-logo.svg";
  aboutUsContainer.appendChild(pizzaImg);

  const aboutUsTitle = document.createElement("h1");
  aboutUsTitle.textContent = "About Us";
  aboutUsContainer.appendChild(aboutUsTitle);

  const aboutUsFullText = document.createElement("div");
  aboutUsFullText.classList.add("about-us-text");
  aboutUsContainer.appendChild(aboutUsFullText);

  const aboutUsText1 = document.createElement("p");
  aboutUsText1.textContent =
    "Hi there! Welcome to the home of Odin's Fakeria. If you haven't noticed already, this restaurant is completely fake! Really, it doesn't even exist!";
  aboutUsFullText.appendChild(aboutUsText1);

  const aboutUsText2 = document.createElement("p");
  aboutUsText2.textContent =
    "Founded in 2023, we have worked hard to strive for absolutely nothing because we're not real. All of our products are made from 100% \xa0\xa0\xa0\xa0\xa0\xa0\xa0 directly from the source, so we can ensure that our food will never exist. Forever.";
  aboutUsFullText.appendChild(aboutUsText2);

  const aboutUsText3 = document.createElement("p");
  aboutUsText3.textContent = "So come on down to Odin's Fakeria today and get your first meal completely free! (and the rest)";
  aboutUsFullText.appendChild(aboutUsText3);

  const btnsContainer = document.createElement("div");
  btnsContainer.setAttribute("id", "about-us-btns");
  aboutUsContainer.appendChild(btnsContainer);

  function createButton(btnText) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = btnText;
    btnsContainer.appendChild(btn);
  }

  createButton("Book Table");
  createButton("View Menu");

  // Populate Follow Us section
  const followUsTitle = document.createElement("h1");
  followUsTitle.textContent = "Follow Us";
  followUsContainer.appendChild(followUsTitle);

  const socialsContainer = document.createElement("div");
  socialsContainer.setAttribute("id", "socials-container");
  followUsContainer.appendChild(socialsContainer);

  // Twitter, Instagram, Tiktok, pinterest, youtube, facebook.

  function createIcon(social, link, imgSrc) {
    const socialLink = document.createElement("a");
    socialLink.setAttribute("href", `${link}`);

    const socialIcon = document.createElement("img");
    socialIcon.classList.add("social-icon");
    socialIcon.setAttribute("id", `${social}-icon`);
    socialIcon.src = imgSrc;

    socialLink.appendChild(socialIcon);
    socialsContainer.appendChild(socialLink);
  }

  createIcon("twitter", "https://www.twitter.com", "./images/003-twitter.png");
  createIcon(
    "instagram",
    "https://www.instagram.com",
    "./images/006-instagram.png"
  );
  createIcon("tiktok", "https://www.tiktok.com", "./images/005-tik-tok.png");
  createIcon(
    "facebook",
    "https://www.facebook.com",
    "./images/004-facebook.png"
  );
  createIcon("youtube", "https://www.youtube.com", "./images/002-youtube.png");
  createIcon(
    "pinterest",
    "https://www.pinterest.com",
    "./images/001-pinterest.png"
  );

  const iconCredits = document.createElement("p");
  iconCredits.classList.add("icon-credits");

  const creatorLink = document.createElement("a");
  creatorLink.textContent = "Freepik";
  creatorLink.setAttribute("href", "https://www.freepik.com");
  const siteLink = document.createElement("a");
  siteLink.textContent = "Flaticon";
  siteLink.setAttribute("href", "https://www.flaticon.com");

  const ptext1 = document.createTextNode("Icons made by ");
  const ptext2 = document.createTextNode(" from ");

  iconCredits.appendChild(ptext1);
  iconCredits.appendChild(creatorLink);
  iconCredits.appendChild(ptext2);
  iconCredits.appendChild(siteLink);

  followUsContainer.appendChild(iconCredits);
}

export { loadAboutPage };
