function renderTodoLIst(todos) {
    const list = document.createElement('ul')
    list.classList.add('list')

    todos.forEach(todo => {
        const item = document.createElement('li')
        item.textContent = todo.title
        item.classList.add('item')
        list.append(item)
    });

    return list
}

export { renderTodoLIst }