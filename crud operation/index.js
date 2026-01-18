
const para = document.createElement('p')
para.textContent = 'this is paragraph'
para.style.backgroundColor = 'red'

document.body.appendChild(para)


const div = document.createElement('div')
div.style.backgroundColor = 'yellow'
div.innerText = 'this is div tag'

// document.body.append(div)

document.body.replaceWith(div)

// document.body.remove(para)