function AddTask() {
    const formBox = document.createElement('div')

    const titleInput = document.createElement('input')

    const inputDate = document.createElement('input')
    inputDate.type = 'date'

    const inputBtn = document.createElement('button')
    inputBtn.textContent = 'Add task';

    formBox.append(titleInput, inputBtn, inputDate)

    return { formBox, titleInput, inputBtn, inputDate }

}

export { AddTask }