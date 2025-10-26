let password=document.querySelector("#password")

let eye=document.querySelector("#eye")


eye.onclick=function(){
    if(password.type=="password"){
        password.type="text";
        eye.src="eye close.svg"
        eye.title="hide password"
    }
    else{
        password.type="password";
        eye.src="eye open red.svg"
         eye.title="show password"
    }
}
