
class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
        this.id = crypto.randomUUID();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
}

export { Project };