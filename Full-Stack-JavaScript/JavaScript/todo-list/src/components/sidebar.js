function sidebarMarking() {
    const sidebarBox = document.createElement('div');
    sidebarBox.classList.add('sidebarBox')

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

    return { sidebarBox, allBtn, todayBtn, importantBtn }

}

export { sidebarMarking }