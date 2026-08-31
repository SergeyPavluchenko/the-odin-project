import { Project } from "./classes/Project.js";
import { Todo } from "./classes/Todo.js";
import { renderTodoLIst } from "./components/todoList.js"
import { sidebarMarking } from "./components/sidebar.js"
import { getDefaultProject } from "./components/todoLogic.js";


const project = getDefaultProject();
 project.addTodo( new Todo("Купити хліб"))
 project.addTodo( new Todo("ПОгуляти на вулиці"))



document.body.append(sidebarMarking(), renderTodoLIst(project.todos))