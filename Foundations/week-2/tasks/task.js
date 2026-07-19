const tasksInput = document.querySelector('.task__input')
const taskBtn = document.querySelector('.task__btn__add')
const taskList = document.querySelector('.task__ul')
const message = document.querySelector('.empty__message')
const filterButton = document.querySelector('.task__filters')


let tasks = []
let currentFilter = "all";

function renderTasks() {
    taskList.innerHTML = ''

    if (tasks.length === 0) {
        message.textContent = 'No tasks yet'
    } else {
        message.textContent = ''
    }

    getFilteredTasks().forEach(task => {
        let li = document.createElement('li')
        li.textContent = task.text
        li.dataset.id = task.id

        if (task.completed) {
            li.classList.add('task__ul__chaked')
        }
        let span = document.createElement('span')

        taskList.appendChild(li)

    })
}


const handleAddTask = (e) => {
    e.preventDefault()
    const value = tasksInput.value.trim()
    if (value === '') {
        message.textContent = 'No tasks yet'
    } else {
        addTask(value)
        tasksInput.value = ''
        message.textContent = ''

    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || []
    renderTasks()
}


function addTask(value) {
    const newTask = {
        id: Date.now(),
        text: value,
        completed: false
    }

    tasks.push(newTask)

    saveTasks()
    renderTasks()
}

const handleToggle = (e) => {
    if (e.target.tagName === 'LI') {
        const id = Number(e.target.dataset.id)
        const task = tasks.find(t => t.id === id)

        if (!task) return;

        task.completed = !task.completed
        saveTasks()
        renderTasks()
    }
}

const handleDelete = (e) => {
    if (e.target.tagName === 'SPAN') {
        const id = Number(e.target.parentElement.dataset.id)
        tasks = tasks.filter(t => t.id !== id)
        saveTasks()
        renderTasks()
    }
}


const getFilteredTasks = () => {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed)
    } else if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed)
    }
    return tasks
}

const handleFilterBtn = (e) => {
    if (e.target.tagName === 'BUTTON') {
        currentFilter = e.target.dataset.filter
        renderTasks()
    }
}

window.addEventListener('load', loadTasks)
taskList.addEventListener('click', (e) => {
    handleToggle(e)
    handleDelete(e)
})
taskBtn.addEventListener('click', handleAddTask);
filterButton.addEventListener('click', handleFilterBtn)

