const contacts = document.createElement('div')
contacts.classList.add('contacts')

const closeBtn = document.createElement('button')
closeBtn.classList.add('closeBtn')
closeBtn.textContent = '×'

const contactText = document.createElement('h2')
contactText.textContent = 'Contact us'

const contactAddress = document.createElement('p')
contactAddress.textContent = '12 Main Street'

const phone = document.createElement('p')
phone.textContent = '+380 12 345 67 89'

const email = document.createElement('p')
email.textContent = 'latavola@gmail.com'


contacts.append(contactText, contactAddress, phone, email)

export default contacts
export { closeBtn as aboutCloseBtn }