let slider = document.querySelector("#slider");
let song = document.querySelector("audio")
song.onloadedmetadata = () => {
    slider.value = song.currentTime;
    slider.max = song.duration
}

let play = document.querySelector("#playSong");
function playing()  {
    if (play.classList.contains("fa-play")) {
        play.classList.add("fa-pause"); 
        play.classList.remove("fa-play")
        song.play()
        image.classList.add("rotate")
    }
    else {
        play.classList.add("fa-play");
        play.classList.remove("fa-pause")
        song.pause()
        image.classList.remove("rotate")
    }
     setInterval(() => {
            slider.value = song.currentTime
        }, 1000)
}
slider.onchange=()=>{
    song.currentTime=slider.value
    song.play()
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");

}

let back=document.querySelector("#back");
back.onclick=()=>{
    if(back.classList.contains("fa-backward")){
    song.currentTime=0;
    playing()
    }
}
let image=document.querySelector("img")

let front=document.querySelector("#front")
front.onclick=()=>{
    document.querySelector(".music").style.backgroundColor="#85b9c8ff"
    image.src="./music.jpg"
    song.src="./photo.mp3"
    playing()
}