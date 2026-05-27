// storing input in a variable 
let display=document.querySelector('#display')
// function for buttons 
function add(input){
    display.value+=input
}
// clearing 
function clearAll(){
    display.value="";
}
// equal to 
function result(){
    try{
    display.value=eval(display.value)
    }
    catch{
        alert("Error ")
    }
}