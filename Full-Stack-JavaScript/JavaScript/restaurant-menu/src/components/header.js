import logoImg from '../img/la_tavola_logo_horizontal.svg'


const header = document.createElement('div')
header.classList.add("header")

const navigation = document.createElement("nav");

const logo = document.createElement("img")
logo.src = logoImg
logo.alt = 'La Tavola'


const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
homeBtn.classList.add("homeBtn");

const aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";
aboutBtn.classList.add("aboutBtn");

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contacts";
contactBtn.classList.add("contactBtn");


header.appendChild(logo)
header.appendChild(navigation)

navigation.appendChild(homeBtn)
navigation.appendChild(aboutBtn)
navigation.appendChild(contactBtn)

export default header