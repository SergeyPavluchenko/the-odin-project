class Todo {
    constructor(
        title,
        dueDate = null,
        important = false,
        id = crypto.randomUUID(),
        completed = false,
    ) {
        this.title = title;
        this.dueDate = dueDate;
        this.important = important;
        this.id = id;
        this.completed = completed;
    }
}

export { Todo };
