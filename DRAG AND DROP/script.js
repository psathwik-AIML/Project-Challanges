let allLists = document.querySelectorAll('.list')
let leftBox = document.querySelector('.left')
let rightBox = document.querySelector('.right')

let selected = null

for (let list of allLists) {
    list.addEventListener('dragstart', (e) => {
        selected = e.target
    })
}

rightBox.addEventListener('dragover', (e) => {
    e.preventDefault()
}
)
rightBox.addEventListener('drop', () => {
    rightBox.appendChild(selected)
    selected = null
}
)
leftBox.addEventListener('dragover', (e) => {
    e.preventDefault()
}
)
leftBox.addEventListener('drop', () => {
    leftBox.appendChild(selected)
    selected = null
}
)