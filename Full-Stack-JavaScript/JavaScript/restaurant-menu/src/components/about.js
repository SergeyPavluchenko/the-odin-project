const about = document.createElement("div");
about.classList.add("about");

const aboutCloseBtn = document.createElement("button");
aboutCloseBtn.classList.add("aboutCloseBtn");
aboutCloseBtn.textContent = "×";

const title = document.createElement("h2");
title.textContent = "About La Tavola";

const content1 = document.createElement("p");
content1.textContent =
    "La Tavola is a cozy Italian café where traditional Italian recipes meet fresh ingredients.";

const content2 = document.createElement("p");
content2.textContent =
    "Our goal is to create a warm place where you can enjoy good food and spend time with friends.";

about.append(aboutCloseBtn, title, content1, content2);

export { about, aboutCloseBtn };
