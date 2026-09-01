function AddTask() {
    const formBox = document.createElement('div')

    const titleInput = document.createElement('input')

    const inputBtn = document.createElement('button')
    inputBtn.textContent = 'Add task';

    formBox.append(titleInput, inputBtn)

    return { formBox, titleInput, inputBtn }

}

export { AddTask }