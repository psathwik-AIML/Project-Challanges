let button=document.getElementById("button");
let input=document.getElementById("input");
let ul=document.getElementById("ul");
let del=document.getElementById("del");
button.addEventListener("click",function(){
    let task=input.value.trim();//eat
    if(task!=''){
        let li=document.createElement("li");
        li.textContent=task;//eat
        ul.appendChild(li);
        li.addEventListener("click",function(){
            li.classList.toggle("remo");
        });
        input.value="";
    };
    
});