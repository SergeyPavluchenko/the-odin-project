const clearBtn = document.querySelector(".header__clearBtn")
const searchInput = document.querySelector(".header__search")
const modalAddBook = document.getElementById("modalAddBook");
const modalClose = document.getElementById("modalClose");
const addBookBtn = document.getElementById("addBookBtn");
const formBook = document.querySelector("form")
const bookList = document.querySelector('.library__list')
const message = document.querySelector('.empty__message')
const search = document.querySelector('.header__search')


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
        let button = document.createElement('button')
        let toggleBtn = document.createElement('button')
        toggleBtn.classList.add('list__toggleBtn')
        button.classList.add('removeBtn')

        toggleBtn.textContent = 'Read'
        button.textContent = '\u00d7'
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? 'read' : 'not read';
        button.addEventListener('click', () => handleDelete(book.id))
        toggleBtn.addEventListener('click', e => handleToggle(book.id))
        bookList.append(li)
        li.append(button, title, author, pages, read, toggleBtn)
    })
}

function filterBooks() {
    const searchValue = search.value.toLowerCase()
    return myLibrary.filter(book => book.title.toLowerCase().includes(searchValue))
}

const handleDelete = (id) => {
    const idx = myLibrary.findIndex(book => book.id === id)
    myLibrary.splice(idx, 1)
    saveBook()
    renderBook()
}

const handleToggle = id => {
    const toggle = myLibrary.find(book => book.id === id)
    toggle.toggleRead()
    saveBook()
    renderBook()
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
    renderBook()
})


function saveBook() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}


function loadBook() {
    const books = JSON.parse(localStorage.getItem('myLibrary')) || [];
    books.forEach(book => {
        const newBooks = new Book(book.title, book.author, book.pages, book.read, book.id)
        myLibrary.push(newBooks)
    })
    renderBook()
}


function Book(title, author, pages, read, id) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.id = id

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`
    }
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

search.addEventListener('input', () => {
    renderBook()
})

window.addEventListener('load', loadBook)

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


clearBtn.addEventListener('click', e => {
    searchInput.value = ''
    renderBook()
})

