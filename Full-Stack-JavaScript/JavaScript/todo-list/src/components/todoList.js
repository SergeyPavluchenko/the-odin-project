function renderTodoLIst(todos, toggleCompleted, toggleImportant, onDelete) {

    const list = document.createElement('ul')
    list.classList.add('list')

    todos.forEach(todo => {
        const item = document.createElement('li')
        item.classList.add('item')

        if (todo.completed) {
            item.classList.add('completed');
        }

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

        const deleteBtn = document.createElement('button')

        deleteBtn.textContent = '🗑';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
            onDelete(todo)
        });


        const title = document.createElement('span')
        title.textContent = todo.title

        item.append(input, title, importantBtn, deleteBtn)
        list.append(item)
    });

    return list
}

export { renderTodoLIst }