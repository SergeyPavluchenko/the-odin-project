const navigation = document.createElement("nav");

const content = document.querySelector("#content");
content.classList.add("restaurant");

const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
homeBtn.classList.add("homeBtn");

const aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";
aboutBtn.classList.add("aboutBtn");

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
contactBtn.classList.add("contactBtn");

document.body.appendChild(content);
content.appendChild(navigation)
navigation.appendChild(homeBtn)
navigation.appendChild(aboutBtn)
navigation.appendChild(contactBtn)

