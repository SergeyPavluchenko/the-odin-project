import "../src/style.css";
import { Project } from "./classes/Project.js";
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

const { sidebarBox, allBtn, todayBtn, importantBtn } = sidebarMarking();
const { formBox, titleInput, inputBtn, inputDate } = AddTask();

inputBtn.addEventListener("click", () => {
    const inputText = titleInput.value;

    if (inputText === "") {
        alert("Write a task.");
        return;
    }

    project.addTodo(new Todo(inputText, inputDate.value));
    saveProject(project);

    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
    );
    titleInput.value = "";
    inputDate.value = "";
});

importantBtn.addEventListener("click", () => {
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(
            getImportantTodos(project.todos),
            toggleCompleted,
            toggleImportant,
            onDelite,
        ),
    );
});

todayBtn.addEventListener("click", () => {
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(
            getTotayTodos(project.todos),
            toggleCompleted,
            toggleImportant,
            onDelite,
        ),
    );
});

allBtn.addEventListener("click", () => {
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
    );
});

function toggleCompleted(todo) {
    todo.completed = !todo.completed;
    saveProject(project);
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
    );
}

function toggleImportant(todo) {
    todo.important = !todo.important;
    saveProject(project);
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
    );
}

function onDelite(todo) {
    project.removeTodo(todo.id);
    saveProject(project);
    todoBox.innerHTML = "";
    todoBox.append(
        renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
    );
}


document.body.append(container);
container.append(sidebarBox, formBox, todoBox);

todoBox.append(
    renderTodoLIst(project.todos, toggleCompleted, toggleImportant, onDelite),
);
