
// input from html 
let input=document.querySelector("#input")
async function show(){
    let respose=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e982fe8750727509edf83e31df9d33d5`)
    let data=await respose.json()
    console.log(data);
    
    let cityName=data.name;
    console.log("cityname: ",cityName);
    let kelvin=data.main.temp;
    let cityTemperature=(kelvin-273.15).toFixed(2);
    let cityDescription=data.weather[0].description;
    console.log("cityname: ",cityDescription);
    // cityname from html code 
    document.querySelector("#cityName").innerText=cityName
    // cityname from html code 
    document.querySelector("#cityTemp").innerText=cityTemperature
    // cityname from html code 
    document.querySelector("#cityDesc").innerText=cityDescription
}