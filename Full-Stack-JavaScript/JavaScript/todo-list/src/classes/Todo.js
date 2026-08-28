class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.important = false;
        this.id = crypto.randomUUID();
        this.completed = false;
    }
}

export { Todo };