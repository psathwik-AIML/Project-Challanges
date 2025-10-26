let input = document.querySelector(".password")
let generate = document.getElementById("btn")

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_/.,"
let count=10;
let allChars=upper+lower+symbols+numbers



function generatePassword() {
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    // console.log("Before : "+password.length);
    while(count>password.length){
        password+=allChars[Math.floor(Math.random() * allChars.length)]
    }
    input.value=password
}

function copyPassword(){
    input.select();
    document.execCommand("copy")
}