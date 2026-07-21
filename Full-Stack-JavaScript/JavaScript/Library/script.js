const clearBtn = document.querySelector(".header__clearBtn");
const searchInput = document.querySelector(".header__search");
const modalAddBook = document.getElementById("modalAddBook");
const modalClose = document.getElementById("modalClose");
const addBookBtn = document.getElementById("addBookBtn");
const formBook = document.querySelector("form");
const bookList = document.querySelector(".library__list");
const message = document.querySelector(".empty__message");

const myLibrary = [];

function renderBook() {
    bookList.innerHTML = "";

    const books = filterBooks();

    if (myLibrary.length === 0) {
        message.textContent = "No books yet";
    } else if (books.length === 0) {
        message.textContent = "No books found.";
    } else {
        message.textContent = "";
    }

    books.forEach((book) => {
        let li = document.createElement("li");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let button = document.createElement("button");
        let toggleBtn = document.createElement("button");
        toggleBtn.classList.add("list__toggleBtn");
        button.classList.add("removeBtn");

        toggleBtn.textContent = book.read ? 'Not read' : 'Read'
        button.textContent = "\u00d7";
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? "read" : "not read";
        button.addEventListener("click", () => handleDelete(book.id));
        toggleBtn.addEventListener("click", (e) => handleToggle(book.id));
        bookList.append(li);
        li.append(button, title, author, pages, read, toggleBtn);
        console.log(toggleBtn);
    });
}

function filterBooks() {
    const searchValue = searchInput.value.toLowerCase();
    return myLibrary.filter((book) =>
        book.title.toLowerCase().includes(searchValue),
    );
}

const handleDelete = (id) => {
    const idx = myLibrary.findIndex((book) => book.id === id);
    if (idx === -1) {
        return;
    }

    myLibrary.splice(idx, 1);
    saveBooks();
    renderBook();
};

const handleToggle = (id) => {
    const toggle = myLibrary.find((book) => book.id === id);

    if (!toggle) {
        return;
    }

    toggle.toggleRead();
    saveBooks();
    renderBook();
};

modalAddBook.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();
    const author = e.target.elements.author.value.trim();
    const pages = Number(e.target.elements.pages.value.trim());
    const read = e.target.elements.read.checked;

    if (!title || !author || pages <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const id = crypto.randomUUID();

    const addBook = new Book(title, author, pages, read, id);
    myLibrary.push(addBook);
    saveBooks();
    formBook.reset();
    renderBook();
    modalAddBook.close();
});

function saveBooks() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadBooks() {
    const books = JSON.parse(localStorage.getItem("myLibrary")) || [];
    books.forEach((book) => {
        const newBooks = new Book(
            book.title,
            book.author,
            book.pages,
            book.read,
            book.id,
        );
        myLibrary.push(newBooks);
    });
    renderBook();
}

function Book(title, author, pages, read, id) {
    ((this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.read = read),
        (this.id = id));

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`;
    };
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

searchInput.addEventListener("input", () => {
    renderBook();
});

window.addEventListener("load", loadBooks);

addBookBtn.addEventListener("click", () => {
    modalAddBook.showModal();
});

modalClose.addEventListener("click", () => {
    modalAddBook.close();
});

modalAddBook.addEventListener("click", (event) => {
    if (event.target === modalAddBook) {
        modalAddBook.close();
    }
});

clearBtn.addEventListener("click", (e) => {
    searchInput.value = "";
    renderBook();
});
