
let button = document.querySelector("button")
let box1= document.querySelector(".box1")
let box2= document.querySelector(".box2")
let h1=document.querySelector(".h1")
let h2=document.querySelector(".h2")

// color generator function 
function colorGenerator() {
    let red = Math.floor(Math.random() * 266)
    let blue = Math.floor(Math.random() * 266)
    let green = Math.floor(Math.random() * 266)

    return `rgb(${red},${blue},${green})`
}
button.addEventListener("click", () => {
    let colorA = colorGenerator()
    let colorB = colorGenerator()
    box2.style.backgroundColor =colorA
    box1.style.backgroundColor =colorB
    h1.textContent=colorA
    h2.textContent=colorB
})

