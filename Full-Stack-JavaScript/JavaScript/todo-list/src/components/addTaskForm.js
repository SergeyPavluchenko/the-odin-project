function AddTask() {
    const formBox = document.createElement('div')
    formBox.classList.add('formBox')

    const inputBox = document.createElement('div')
    inputBox.classList.add('inputBox')

    const titleInput = document.createElement('input')
    titleInput.classList.add('titleInput')

    const inputDate = document.createElement('input')
    inputDate.classList.add('inputDate')
    inputDate.type = 'date'

    const inputBtn = document.createElement('button')
    inputBtn.textContent = 'Add task';

    formBox.append(titleInput, inputBox)
    inputBox.append(inputBtn, inputDate)

    return { formBox, titleInput, inputBtn, inputDate }

}

export { AddTask }