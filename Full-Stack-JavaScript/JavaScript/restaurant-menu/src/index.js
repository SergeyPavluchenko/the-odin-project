import "./style.css";
import { header, homeBtn, aboutBtn, contactBtn } from "./components/header";
import { about, aboutCloseBtn } from "./components/about";
import { contacts, contactsCloseBtn } from "./components/contacts";

const content = document.querySelector("#content");
content.classList.add("restaurant");

const main = document.createElement("div");
main.classList.add("main_content");

content.appendChild(header);
content.appendChild(main);

function showHome() {
    main.replaceChildren();
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

function closeAbout() {
    about.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 600);
}

function closeContacts() {
    contacts.classList.remove("show");

    setTimeout(() => {
        main.replaceChildren();
    }, 300);
}

homeBtn.addEventListener("click", showHome);
aboutBtn.addEventListener("click", showAbout);
contactBtn.addEventListener("click", showContacts);
aboutCloseBtn.addEventListener("click", closeAbout);
contactsCloseBtn.addEventListener("click", closeContacts);

showHome();
