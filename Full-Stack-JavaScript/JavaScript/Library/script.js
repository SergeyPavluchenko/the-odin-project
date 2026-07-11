const clearBtn = document.querySelector(".header__clearBtn")
const searchInput = document.querySelector(".header__serch")
const modalAddBook = document.getElementById("modalAddBook");
const modalClose = document.getElementById("modalClose");
const addBookBtn = document.getElementById("addBookBtn");
const formBook = document.querySelector(".form__book")
console.log(formBook.value);




const myLibrary = []




function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,

        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'
                }`
        }
}

function addBook() {

}

const theHobbit = new Book('THe Hobbit', 'J. R. R. Tolking', 295, false)

console.log(theHobbit.info());





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
});

clearBtn.addEventListener('click', e => {
    searchInput.value = ''
})
