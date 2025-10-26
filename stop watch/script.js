
let [seconds, minutes, hours] = [0, 0, 0]
let display = document.querySelector(".show")
let timer = null

// logic 
function watch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    display.innerHTML = (h + ":" + m + ":" + s)
}

function play() {

    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(watch, 1000)
}
function stop() {
    clearInterval(timer)
}

function reset() {
    clearInterval(timer)
    seconds=0;
    hours=0;
    minutes=0;
    display.innerHTML = "00:00:00"
}