import "../src/style.css";
import { Todo } from "./classes/Todo.js";
import { renderTodoList } from "./components/todoList.js";
import { sidebarMarking } from "./components/sidebar.js";
import {
    getImportantTodos,
    getCompletedTodos,
    getTodayTodos,
    loadProject,
} from "./logic/todoLogic.js";
import { AddTask } from "./components/addTaskForm.js";
import { saveProject } from "./logic/todoLogic.js";

const project = loadProject();

const container = document.createElement('div')
container.classList.add('container')

const todoBox = document.createElement("div");
todoBox.classList.add('todoBox')

const { sidebarBox, allBtn, todayBtn, importantBtn, completedBtn } = sidebarMarking();
const { formBox, titleInput, inputBtn, inputDate } = AddTask();

let currentView = 'all'

function renderCurrentView() {
    todoBox.innerHTML = ''

    let todos = project.todos

    if (currentView === 'important') {
        todos = getImportantTodos(project.todos)
    }
    if (currentView === 'today') {
        todos = getTodayTodos(project.todos)
    }
    if (currentView === 'completed') {
        todos = getCompletedTodos(project.todos)
    }

    todoBox.append(
        renderTodoList(
            todos,
            toggleCompleted,
            toggleImportant,
            onDelete,
            currentView
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

completedBtn.addEventListener("click", () => {
    currentView = 'completed'
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
    renderCurrentView()
}


container.append(sidebarBox, formBox, todoBox);
document.body.append(container);

renderCurrentView()

