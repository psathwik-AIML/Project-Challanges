let result=document.querySelector('.output');
let h=document.querySelector('h1');


let capital="ABCDEFGHIKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let digits="1234567890";
let symbols="!@#$%_*";

function getPass(length){
    let pass="";
    let allowed=capital+digits+lower+symbols;
    for(let i=0;i<length;i++){
        let index=Math.floor(Math.random()*allowed.length);
        pass+=allowed[index];
    }
    result.value=pass;
}