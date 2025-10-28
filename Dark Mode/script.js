
let image=document.querySelector("img")
console.log(image);


image.onclick=changeDark
function changeDark(){
   
    if (image.src.includes("lightmode.svg")) {
        document.body.classList.remove("darkmode");
        image.src = "darkmode.svg";
    } else {
        document.body.classList.add("darkmode");
        image.src = "lightmode.svg";
        image.setAttribute("title","lightMode")
    }
}

