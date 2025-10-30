let song = document.getElementById("song")
let slider = document.getElementById("slider")
let icon = document.getElementById("play")

song.onloadedmetadata = function () {
    slider.max = song.duration;
    slider.value = song.currentTime;
};
if(slider.value===song.duration){
    song.pause()
}
function playPause() {
    if (icon.classList.contains("fa-pause")) {
        song.pause()
         document.querySelector("img").classList.remove("rotate")
        icon.classList.add("fa-play")
        icon.classList.remove("fa-pause")
    }
    else {
        song.play()
        document.querySelector("img").classList.add("rotate")
        icon.classList.add("fa-pause")
        icon.classList.remove("fa-play")
        setInterval(() => {
            slider.value = song.currentTime

        },1000)
    }
}

slider.onchange = function () {
    song.play()
    song.currentTime = slider.value
    icon.classList.add("fa-pause")
    icon.classList.remove("fa-play")
}
