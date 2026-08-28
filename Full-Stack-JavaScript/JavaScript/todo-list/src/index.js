import { Project } from "./classes/Project.js";
import { Todo } from "./classes/Todo.js";


const project1 = new Project("Project 1");
const todo1 = new Todo("Купити хліб");
const todo2 = new Todo("ПОгуляти на вулиці");

project1.addTodo(todo1);
project1.addTodo(todo2);

console.log(project1);
console.log(project1.todos);

project1.removeTodo(todo1.id);
console.log(project1.todos);