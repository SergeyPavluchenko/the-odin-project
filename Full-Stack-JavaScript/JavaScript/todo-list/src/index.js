import { Project } from "./classes/Project.js";
import { Todo } from "./classes/Todo.js";
import { renderTodoLIst } from "./components/todoList.js";
import { sidebarMarking } from "./components/sidebar.js";
import { getDefaultProject, getImportantTodos, getCompletedTodos, getTotayTodos, } from "./logic/todoLogic.js";
import { AddTask } from "./components/addTaskForm.js";
import { saveProject } from "./logic/storage.js";


const project = getDefaultProject();

const todoBox = document.createElement("div");

const { sidebarBox, allBtn, todayBtn, importantBtn } = sidebarMarking();
const { formBox, titleInput, inputBtn } = AddTask()

inputBtn.addEventListener("click", () => {
    const inputText = titleInput.value

    project.addTodo(new Todo(inputText));
    saveProject(project)

    todoBox.innerHTML = "";
    todoBox.append(renderTodoLIst(project.todos))
    titleInput.value = ''
});

importantBtn.addEventListener("click", () => {
    todoBox.innerHTML = "";
    todoBox.append(renderTodoLIst(getImportantTodos(project.todos)));
});

todayBtn.addEventListener('click', () => {
    todoBox.innerHTML = '';
    todoBox.append(renderTodoLIst(getTotayTodos(project.todos)))
})

allBtn.addEventListener('click', () => {
    todoBox.innerHTML = ''
    todoBox.append(renderTodoLIst(project.todos))
})

document.body.append(sidebarBox, formBox, todoBox);

todoBox.append(renderTodoLIst(project.todos));
