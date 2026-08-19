import { header, homeBtn, aboutBtn, contactBtn } from './components/header.js'
import about, { aboutCloseBtn } from './components/about.js'
import contacts, { contactsCloseBtn } from './components/contacts.js'


const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.appendChild(overlay)
document.body.appendChild(about)
document.body.appendChild(contacts)

function openPanel(panel) {
    overlay.classList.add('active')
    panel.classList.add('active')
}

function closeAll() {
    overlay.classList.remove('active')
    about.classList.remove('active')
    contacts.classList.remove('active')
}

aboutBtn.addEventListener('click', () => openPanel(about))
contactBtn.addEventListener('click', () => openPanel(contacts))
overlay.addEventListener('click', closeAll)
aboutCloseBtn.addEventListener('click', closeAll)
contactsCloseBtn.addEventListener('click', closeAll)