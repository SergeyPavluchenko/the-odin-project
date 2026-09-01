function saveProject(project) {
    localStorage.setItem('project', JSON.stringify(project))
}

export { saveProject }