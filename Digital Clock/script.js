let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
setInterval(() => {
    let time=new Date()
    hours.innerHTML = (time.getHours()<10?"0":"")+time.getHours()
    minutes.innerHTML = (time.getMinutes()<10?"0":"")+time.getMinutes()
    seconds.innerHTML = (time.getSeconds()<10?"0":"")+time.getSeconds()

},1000);


