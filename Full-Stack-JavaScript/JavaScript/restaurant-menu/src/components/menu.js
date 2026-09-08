import dishes from "../data/dishes.json";

const menu = document.createElement("div");
menu.classList.add("menu");

const menuCloseBtn = document.createElement("button");
menuCloseBtn.classList.add("menuCloseBtn");
menuCloseBtn.textContent = "×";
menuCloseBtn.type = "button";

const title = document.createElement("h2");
title.classList.add("title-menu");
title.textContent = "Menu";

const list = document.createElement("ul");
list.classList.add("list");

dishes.forEach((dish) => {
    const cardList = document.createElement("li");
    cardList.classList.add("cardList");

    const name = document.createElement("h3");
    name.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const price = document.createElement("span");
    price.textContent = dish.price;

    cardList.append(name, description, price);
    list.appendChild(cardList);
});

menu.append(menuCloseBtn, title, list);

export { menu, menuCloseBtn };
