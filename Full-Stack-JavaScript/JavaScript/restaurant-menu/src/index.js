import "./style.css"
import header from "./components/header"

const content = document.querySelector("#content");
content.classList.add("restaurant");

const main = document.createElement('div')
main.classList.add('main_content')

content.appendChild(header)
content.appendChild(main)

