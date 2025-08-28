const locationinput=document.getElementById("locationInput");
   const cityName=document.getElementById("city-value");   
const btn=document.getElementById("getWeatherBtn");
const weatherresult=document.getElementById("weatherResult");
const temperatureValue=document.getElementById("temp-value");
const humidityValue=document.getElementById("humidity-value");
const descriptionValue=document.getElementById("description-value");
const iconValue=document.getElementById("icon-value");
function getWeather() {
    const apiKey = "698dccbf95ce0d4c45126253c1a16e71";

const url=`https://api.openweathermap.org/data/2.5/weather?q=${locationinput.value}&appid=${apiKey}&units=metric`;


fetch(url)
.then((response)=>response.json())
.then((data)=>{

    if (!data.main) {
        cityName.textContent = "City not found!";
        temperatureValue.textContent = "-";
        descriptionValue.textContent = "-";
        humidityValue.textContent = "-";
        iconValue.src = "";
        document.getElementById("container").style.display="none";
        weatherresult.style.display = "block";
        return;
    }    
    cityName.textContent=locationinput.value;
    temperatureValue.textContent=`${data.main['temp']} °C`;
    descriptionValue.textContent=data.weather[0].description;
    humidityValue.textContent=`${data.main['humidity']} %`;
   iconValue.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    iconValue.style.display="block";
    document.getElementById("container").style.display="none";
    weatherresult.style.display="block";
})
}
btn.addEventListener("click",getWeather);
