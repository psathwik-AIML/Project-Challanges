let speech = new SpeechSynthesisUtterance()
let matter = document.querySelector("textarea")
speechSynthesis.speak(speech)
// console.log(speech);

let voices = []
let selectedVoice = document.querySelector("select")
speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices()
    speech.voice = voices[0]

    // loop 
    voices.forEach((each, i) => {
        selectedVoice.options[i]=new Option(each.name,i)
    })

}
document.querySelector(".play").addEventListener("click", function () {
    speechSynthesis.cancel()
    speech.text = matter.value
    speechSynthesis.speak(speech)
})

selectedVoice.addEventListener("change",function(){
    speech.voice=voices[selectedVoice.value]
    
})
document.querySelector(".pause").addEventListener("click", function () {
    speechSynthesis.pause()
})

document.querySelector(".resume").addEventListener("click", function () {
    speechSynthesis.resume()
})
document.querySelector(".cancel").addEventListener("click", function () {
    speechSynthesis.cancel()
})