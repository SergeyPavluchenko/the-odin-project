const clearBtn = document.querySelector(".header__clearBtn")
const searchInput = document.querySelector(".header__serch")
const modalAddBook = document.getElementById("modalAddBook");
const modalClose = document.getElementById("modalClose");
const addBookBtn = document.getElementById("addBookBtn");
const formBook = document.querySelector("form")
const checkedInput = document.querySelector(".label__read")
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const bookList = document.querySelector('.library__list')
const message = document.querySelector('.empty__message')
const search = document.querySelector('.header__serch')
const addedBook = document.querySelector('.addBtn')


const myLibrary = []

function renderBook() {
    bookList.innerHTML = ''
    if (myLibrary.length === 0) {
        message.textContent = 'No books yet'
    } else {
        message.textContent = ''
    }
    filterBooks().forEach(book => {
        let li = document.createElement('li')
        let title = document.createElement('p')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let read = document.createElement('p')
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? 'read' : 'not read';
        li.append(title, author, pages, read)
        bookList.append(li)
    })
}

function filterBooks() {
    const searchValue = search.value.toLowerCase()
    return myLibrary.filter(book => book.title.toLowerCase().includes(searchValue))
}


modalAddBook.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value.trim();
    const author = e.target.elements.author.value.trim();
    const pages = e.target.elements.pages.value.trim();
    const read = e.target.elements.read.checked;
    const id = crypto.randomUUID()

    const addBook = new Book(title, author, pages, read, id)
    myLibrary.push(addBook)
    saveBook()
    formBook.reset()
})


function saveBook() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}


function loadBook() {
    const books = JSON.parse(localStorage.getItem('myLibrary')) || [];
    myLibrary.push(...books)
    renderBook()
}


function Book(title, author, pages, read, id) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.id = id

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'
            }`
    }
}





search.addEventListener('input', () => {
    filterBooks()
})

window.addEventListener('load', loadBook)

addBookBtn.addEventListener("click", () => {
    modalAddBook.showModal();
});

addedBook.addEventListener("click", () => {
    modalAddBook.close();
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
});

clearBtn.addEventListener('click', e => {
    searchInput.value = ''
})
