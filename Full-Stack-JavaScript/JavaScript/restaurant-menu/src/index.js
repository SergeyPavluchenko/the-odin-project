import "./style.css"
import { header, homeBtn, aboutBtn, contactBtn } from "./components/header"
import about from "./components/about";
import contacts from "./components/contacts";

const content = document.querySelector("#content");
content.classList.add("restaurant");

const main = document.createElement('div')
main.classList.add('main_content')

content.appendChild(header)
content.appendChild(main)


function showHome() {
    main.replaceChildren()
}

function showAbout() {
    main.replaceChildren(about)
}

function showContacts() {
    main.replaceChildren(contacts)
}

homeBtn.addEventListener('click', showHome)
aboutBtn.addEventListener('click', showAbout)
contactBtn.addEventListener('click', showContacts)

showHome()