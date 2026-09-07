const home = document.createElement("div");
home.classList.add("home");

const homeCloseBtn = document.createElement("button");
homeCloseBtn.classList.add("homeCloseBtn");
homeCloseBtn.textContent = "×";
homeCloseBtn.type = "button";

const title = document.createElement("h1");
title.textContent = "La Tavola";

const subtitle = document.createElement("p");
subtitle.textContent = "Traditional Italian food made with fresh ingredients.";

home.append(homeCloseBtn, title, subtitle);

export { home, homeCloseBtn };
