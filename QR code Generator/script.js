let input = document.querySelector("#display")
let box = document.querySelector(".box")
let image = document.querySelector("#img")



function generate() {
    if (input.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value
    }
    else{
        alert("Fill gap")
    }
}

function fun() {
    input.value.select();
    document.execCommand("copy")
}