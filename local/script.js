let ul = document.querySelector("ul")
let input = document.getElementById("input")
let del = document.querySelector(".del")
// array to store 
let array = JSON.parse(localStorage.getItem("list")) || []
show()
function addTask() {
    if (input.value != "") {
        let li = document.createElement("li")
        let button = document.createElement("button")
        li.innerText = input.value
        button.innerHTML = "Delete"
        button.classList.add("del")
        li.appendChild(button)
        ul.appendChild(li)
        array.push(input.value)
        input.value = ""
        localStorage.setItem("list", JSON.stringify(array))
        button.onclick = () => deleteTask(li);
    }

}

function show() {
    if (array.length === 0) {
        ul.innerHTML = "<h2>List is 0</h2>"
    }
    for (let each of array) {
        let li = document.createElement("li")
        let button = document.createElement("button")
        li.innerText = each
        button.innerHTML = "Delete"
        button.classList.add("del")
        li.appendChild(button)
        ul.appendChild(li)
        button.onclick = () => deleteTask(li);

    }
}

function deleteTask(li) {
    let txt = li.firstChild.textContent;
    li.remove()
    array = array.filter((each) => each !== txt)
    localStorage.setItem("list", JSON.stringify(array))
    if (array.length === 0) {
        ul.innerHTML = "<h2>List is Empty</h2>"
    }
}