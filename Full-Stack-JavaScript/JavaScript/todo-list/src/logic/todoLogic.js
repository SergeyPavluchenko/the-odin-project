import { Project } from "../classes/Project.js";
import { Todo } from "../classes/Todo.js";


function getImportantTodos(todos) {
    return todos.filter((todo) => todo.important);
}

function getCompletedTodos(todos) {
    return todos.filter((todo) => todo.completed);
}

function getTotayTodos(todos) {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0");
    const today = `${year}-${month}-${day}`;

    return todos.filter(todo => todo.dueDate === today);

}

function saveProject(project) {
    localStorage.setItem("project", JSON.stringify(project));
}

function loadProject(project) {
    const savedProject = localStorage.getItem("project");
    if (!savedProject) {
        return new Project("Default");
    }

    const parsedProject = JSON.parse(savedProject);
    const newProject = new Project(parsedProject.title);
    newProject.todos = parsedProject.todos.map(
        (todo) => new Todo(todo.title, todo.dueDate, todo.important, todo.id, todo.completed),
    );
    return newProject
}

export {
    getImportantTodos,
    getCompletedTodos,
    getTotayTodos,
    saveProject,
    loadProject,
};
