const contacts = document.createElement("div");
contacts.classList.add("contacts");

const contactsCloseBtn = document.createElement("button");
contactsCloseBtn.classList.add("contactsCloseBtn");
contactsCloseBtn.textContent = "×";

const contactText = document.createElement("h2");
contactText.textContent = "Contact us";

const contactAddress = document.createElement("p");
contactAddress.textContent = "Kyiv, Khreshchatyk Street";

const phone = document.createElement("p");
phone.textContent = "+380 12 345 67 89";

const email = document.createElement("p");
email.textContent = "latavola@gmail.com";

contacts.append(contactsCloseBtn, contactText, contactAddress, phone, email);

export { contacts, contactsCloseBtn };
