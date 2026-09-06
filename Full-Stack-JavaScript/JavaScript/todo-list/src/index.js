import "../src/style.css";
import { Todo } from "./classes/Todo.js";
import { renderTodoLIst } from "./components/todoList.js";
import { sidebarMarking } from "./components/sidebar.js";
import {
    getImportantTodos,
    getCompletedTodos,
    getTotayTodos,
    loadProject,
} from "./logic/todoLogic.js";
import { AddTask } from "./components/addTaskForm.js";
import { saveProject } from "./logic/todoLogic.js";

const project = loadProject();

const container = document.createElement('div')
container.classList.add('container')

const todoBox = document.createElement("div");
todoBox.classList.add('todoBox')

const { sidebarBox, allBtn, todayBtn, importantBtn } = sidebarMarking();
const { formBox, titleInput, inputBtn, inputDate } = AddTask();

let currentView = 'all'

function renderCurrentView() {
    todoBox.innerHTML = ''

    let todos = project.todos

    if (currentView === 'important') {
        todos = getImportantTodos(project.todos)
    }
    if (currentView === 'today') {
        todos = getTotayTodos(project.todos)
    }

    todoBox.append(
        renderTodoLIst(
            todos,
            toggleCompleted,
            toggleImportant,
            onDelete
        ))
}

inputBtn.addEventListener("click", () => {
    const inputText = titleInput.value;

    if (inputText === "") {
        alert("Write a task.");
        return;
    }

    project.addTodo(new Todo(inputText, inputDate.value));
    saveProject(project);

    titleInput.value = "";
    renderCurrentView()
});

importantBtn.addEventListener("click", () => {
    currentView = 'important'
    renderCurrentView()

});

todayBtn.addEventListener("click", () => {
    currentView = 'today'
    renderCurrentView()
});

allBtn.addEventListener("click", () => {
    currentView = 'all'
    renderCurrentView()
});

function toggleCompleted(todo) {
    todo.completed = !todo.completed;
    saveProject(project);
    todoBox.innerHTML = "";
    renderCurrentView()
}

function toggleImportant(todo) {
    todo.important = !todo.important;
    saveProject(project);
    todoBox.innerHTML = "";
    renderCurrentView()
}

function onDelete(todo) {
    project.removeTodo(todo.id);
    saveProject(project);
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelete),
    );
}


container.append(sidebarBox, formBox, todoBox);
document.body.append(container);

todoBox.append(
    renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelete),
);

renderCurrentView()

