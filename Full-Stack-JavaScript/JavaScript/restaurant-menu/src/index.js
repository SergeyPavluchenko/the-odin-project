import "./style.css";
import {
    header,
    homeBtn,
    menuBtn,
    aboutBtn,
    contactBtn,
} from "./components/header";
import { about, aboutCloseBtn } from "./components/about";
import { contacts, contactsCloseBtn } from "./components/contacts";
import { home, homeCloseBtn } from "./components/home";
import { menu, menuCloseBtn } from "./components/menu";

const content = document.querySelector("div");
content.classList.add("content");
content.id = "content";

const main = document.createElement("div");
main.classList.add("main_content");

content.appendChild(header);
content.appendChild(main);

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll(".nav__button");

    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function showHome() {
    main.replaceChildren(home);

    requestAnimationFrame(() => {
        home.classList.add("show");
    });
}

function showMenu() {
    main.replaceChildren(menu);

    requestAnimationFrame(() => {
        menu.classList.add("show");
    });
}

function showAbout() {
    main.replaceChildren(about);

    requestAnimationFrame(() => {
        about.classList.add("show");
    });
}

function showContacts() {
    main.replaceChildren(contacts);

    requestAnimationFrame(() => {
        contacts.classList.add("show");
    });
}

function closeHome() {
    home.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 600);

    homeBtn.classList.remove("active");
}

function closeMenu() {
    menu.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 600);

    menuBtn.classList.remove("active");
}

function closeAbout() {
    about.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 600);

    aboutBtn.classList.remove("active");
}

function closeContacts() {
    contacts.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 300);

    contactBtn.classList.remove("active");
}

homeBtn.addEventListener("click", () => {
    (setActiveButton(homeBtn), showHome());
});
menuBtn.addEventListener("click", () => {
    (setActiveButton(menuBtn), showMenu());
});
aboutBtn.addEventListener("click", () => {
    (setActiveButton(aboutBtn), showAbout());
});
contactBtn.addEventListener("click", () => {
    (setActiveButton(contactBtn), showContacts());
});
homeCloseBtn.addEventListener("click", closeHome);
menuCloseBtn.addEventListener("click", closeMenu);
aboutCloseBtn.addEventListener("click", closeAbout);
contactsCloseBtn.addEventListener("click", closeContacts);
