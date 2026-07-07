const form = document.querySelector('.form__input')
const inputSearch = document.querySelector('.search')
const inputText = document.querySelector('.output')
const errorMessage = document.querySelector('.error')

const handleSubmit = (event) => {
    event.preventDefault()

    if (inputSearch.value === '') {
        errorMessage.textContent = 'Enter text'
        return
    }
    errorMessage.textContent = ''
    inputText.textContent = inputSearch.value
    localStorage.setItem('savedText', inputSearch.value)
    console.log(inputSearch.value);
    inputSearch.value = ''

}

// inputSearch.addEventListener("input", (event) => {
//     inputText.textContent = event.currentTarget.value;
// });



form.addEventListener('submit', handleSubmit)