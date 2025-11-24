let box=document.querySelector(".box");
let successMessage='<i class="fa-solid fa-circle-check"></i> Success Vachindhi'
let errorMessage='<i class="fa-solid fa-circle-xmark"></i>Error Vachindhi'
let invalidMessage='<i class="fa-solid fa-circle-exclamation"></i>Invalid Vachindhi'
function show(msg){
    // creation of div 
    let div=document.createElement("div");
    div.classList.add("toast")
    div.innerHTML=msg
    box.appendChild(div)
    if(msg.includes("Error")){
        div.classList.add("error")
    }
    if(msg.includes("Invalid")){
        div.classList.add("invalid")
    }
    setTimeout(()=>{
        div.remove()
    },5000)

}