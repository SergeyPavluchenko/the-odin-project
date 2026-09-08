import logoImg from "../img/la_tavola_logo_horizontal.svg";

const header = document.createElement("div");
header.classList.add("header");

const navigation = document.createElement("nav");


const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = logoImg;
logo.alt = "La Tavola";

const homeBtn = document.createElement("button");
homeBtn.type = "button";
homeBtn.textContent = "Home";
homeBtn.classList.add("nav__button", "homeBtn");

const menuBtn = document.createElement("button");
menuBtn.type = "button";
menuBtn.textContent = "Menu";
menuBtn.classList.add("nav__button", "menuBtn");

const aboutBtn = document.createElement("button");
aboutBtn.type = "button";
aboutBtn.textContent = "About";
aboutBtn.classList.add("nav__button", "aboutBtn");

const contactBtn = document.createElement("button");
contactBtn.type = "button";
contactBtn.textContent = "Contacts";
contactBtn.classList.add("nav__button", "contactBtn");

header.append(logo, navigation);

navigation.append(homeBtn, menuBtn, aboutBtn, contactBtn);

export { header, homeBtn, menuBtn, aboutBtn, contactBtn };
