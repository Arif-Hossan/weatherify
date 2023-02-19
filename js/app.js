//API Key
const API_KEY=`25e489afb4c8219233913ec9051d9ccd`;

const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayTemperature(data));
}

const displayTemperature= temperatureData =>{
    console.log(temperatureData);
    // const temperature = document.getElementById('temperature');
    // temperature.innerText= temperatureData.main.temp;
    // const city = document.getElementById('city');
    // city.innerText=temperatureData.name;
    setInnerText("temperature",temperatureData.main.temp)
    setInnerText("city",temperatureData.name)
    setInnerText("weather",temperatureData.weather[0].main)

}
// set innerText /HTML Markup
const setInnerText = (elementId, text)=>{
    const element = document.getElementById(elementId);
    element.innerText=text;
}
// searching process
const searchProcess= ()=>{
    const searchField= document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
};
// search button
const searchTemperature = () =>{
    searchProcess();
}
// search function for enter key
document.getElementById('search-field').addEventListener("keydown",function(event){
    console.log(event.key);
    if (event.key === "Enter"){
    event.preventDefault();
    searchProcess();
    }
});
// default function call for Dhaka
loadTemperature('Dhaka');