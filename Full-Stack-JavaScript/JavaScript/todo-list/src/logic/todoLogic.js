import { Project } from "../classes/Project.js";

function getDefaultProject() {
    return new Project("Default");
}

function getImportantTodos(todos) {
    return todos.filter((todo) => todo.important);
}

function getCompletedTodos(todos) {
    return todos.filter((todo) => todo.completed);
}

function getTotayTodos(todos) {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((todo) => todo.dueDate === today);
}

export {
    getDefaultProject,
    getImportantTodos,
    getCompletedTodos,
    getTotayTodos,
};
