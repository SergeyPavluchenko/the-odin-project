const about = document.createElement('div')
about.classList.add('about')

const closeBtn = document.createElement('button')
closeBtn.classList.add('closeBtn')
closeBtn.textContent = '×'

const title = document.createElement('h2')
title.textContent = 'About La Tavola'

const contant1 = document.createElement('p')
contant1.textContent = "La Tavola is a cozy Italian café where traditional Italian recipes meet fresh ingredients."

const contant2 = document.createElement('p')
contant2.textContent = "Our goal is to create a warm place where you can enjoy good food and spend time with friends."


about.append(title, contant1, contant2)

export default about
export { closeBtn as aboutCloseBtn }