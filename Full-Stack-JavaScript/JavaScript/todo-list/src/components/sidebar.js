function sidebarMarking() {
    const sidebarBox = document.createElement('div');

    const allBtn = document.createElement('button')
    allBtn.textContent = 'All todos'
    allBtn.classList.add('allBtn')

    const todayBtn = document.createElement('button')
    todayBtn.textContent = 'Today'
    todayBtn.classList.add('todayBtn')

    const importantBtn = document.createElement('button')
    importantBtn.textContent = 'Important'
    importantBtn.classList.add('importantBtn')

    sidebarBox.append(allBtn, todayBtn, importantBtn)

    return sidebarBox

}

export { sidebarMarking }