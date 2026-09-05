function renderTodoLIst(todos, toggleCompleted, toggleImportant, onDelite) {

    const list = document.createElement('ul')
    list.classList.add('list')

    todos.forEach(todo => {
        const item = document.createElement('li')
        item.classList.add('item')

        const input = document.createElement('input')
        input.type = 'checkbox'
        input.checked = todo.completed

        input.addEventListener('change', () => {
            toggleCompleted(todo);
        });

        const importantBtn = document.createElement('button');

        importantBtn.textContent = '★';
        importantBtn.classList.add('important-btn');

        if (todo.important) {
            importantBtn.classList.add('important')
        }

        importantBtn.addEventListener('click', () => {
            toggleImportant(todo)
        });

        const deliteBtn = document.createElement('button')

        deliteBtn.textContent = '🗑';
        deliteBtn.classList.add('delite-btn');

        deliteBtn.addEventListener('click', () => {
            onDelite(todo)
        });


        const title = document.createElement('span')
        title.textContent = todo.title

        item.append(input, title, importantBtn, deliteBtn)
        list.append(item)
    });

    return list
}

export { renderTodoLIst }