import { Project } from "../classes/Project.js"


function getDefaultProject() {
    return new Project('Default')
}

export { getDefaultProject }