//API Key
const API_KEY=`25e489afb4c8219233913ec9051d9ccd`;

const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayTemperature(data));
}

const displayTemperature= temperatureData =>{
    console.log(temperatureData.name);
    // const temperature = document.getElementById('temperature');
    // temperature.innerText= temperatureData.main.temp;
    // const city = document.getElementById('city');
    // city.innerText=temperatureData.name;
    setInnerText("temperature",temperatureData.main.temp)
    setInnerText("city",temperatureData.name)

}
// set innerText /HTML Markup
const setInnerText = (elementId, text)=>{
    const element = document.getElementById(elementId);
    element.innerText=text;
}
loadTemperature('London');