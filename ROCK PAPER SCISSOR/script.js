const buttons=['rock','paper','scissors'];
const choices=document.querySelectorAll('.button');
let user_choice=document.querySelector('#user');
let computer_choice=document.querySelector('#computer');
let result=document.querySelector('#winner');
const reset=document.querySelector('#reset');
for(let but of choices){
    but.addEventListener('click',function(){
        let user=but.id;
        user_choice.textContent=user;
        let computer=computerChoice();
        computer_choice.textContent=computer;
         result.style.color='white';
        if(user==computer){
            result.textContent="draw";
             result.style.color='orange';
        }
        else if(user=="rock"&&computer=="scissors"||
            user=="paper"&&computer=="rock"||
            user=="scissors"&&computer=="paper"
        ){
            result.textContent="User won";
             result.style.color='green';
        }
        else{
            result.textContent="User lost";
            result.style.color="red";
            
        }
    });
}
reset.addEventListener('click',function(){
     user_choice.textContent = "";
     computer_choice.textContent = "";
     result.textContent = "play again";
     result.style.color = '#F1C550';
})
function computerChoice(){
    let index=Math.floor(Math.random()*buttons.length);
    return buttons[index];
}