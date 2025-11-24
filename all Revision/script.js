// object creation for speechSynthesis
let speech=new SpeechSynthesisUtterance("hello")

// storing all voices 
let voices =[]
let input =document.querySelector("textarea")
let select =document.querySelector("select")
// speechSynthesis.addEventListener
document.querySelector("button").onclick=()=>{
     speech.text=input.value
     speechSynthesis.speak(speech)
}
speechSynthesis.onvoiceschanged=()=>{
    voices=speechSynthesis.getVoices()
    speech.voice=voices[0]
    
    voices.forEach((each,i)=>{
        select.options[i]=new Option(each.name,i)
    })
}

select.onchange=()=>{
    speech.voice=voices[select.value]
}