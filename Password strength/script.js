let message = document.querySelector("#message")
let part = document.querySelector("#part")
let pass =document.querySelector(".pass")

pass.addEventListener("input",()=>{
    if(pass.value.length>0){
        message.style.display="block"
    }
    else{
        message.style.display="none"
    }
    if(pass.value.length<4){
        part.textContent="weak"
        message.style.color="#ff5925"
        pass.style.borderColor="#ff5925"
    }
    else if(pass.value.length>=4 &&pass.value.length<8){
        part.textContent="medium"
        message.style.color="yellow"
        pass.style.borderColor="yellow"
    }
    else if(pass.value.length>8){
        part.textContent="strong"
        message.style.color="#26d730"
        pass.style.borderColor="#26d730"
    }
    
})
