const form = document.querySelector(".form-input")
const searchField = document.querySelector(".search")
const clearButton = document.querySelector(".clear-button")



const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('savedText', searchField.value)
    searchField.value = '';
}

const handleLoad = () => {
    const saved = localStorage.getItem('savedText') ?? ""
    searchField.value = saved

}

const handleClear = () => {
    localStorage.removeItem('savedText')
    searchField.value = '';
}

window.addEventListener('load', handleLoad)
form.addEventListener('submit', handleSubmit)
clearButton.addEventListener('click', handleClear)