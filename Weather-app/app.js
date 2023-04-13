const yearMonths = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

const week = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
]

const time = document.querySelector(".time");
const date = document.querySelector(".date");
const cityInput = document.querySelector(".input-box");
const searchBtn = document.querySelector("button");
const tempReport = document.querySelector(".temp-report");
const cityReport = document.querySelector(".city-report");
const humidityReport = document.querySelector(".humidity-report");
const windReport = document.querySelector(".wind-report");
const pressureReport = document.querySelector(".pressure-report");
const weatherReport = document.querySelector(".weather-report");

const today = new Date();
const hours = today.getHours();
const mins = today.getMinutes()
const days = today.getDay()
const dateDay = today.getDate()
const months = today.getMonth();

const min = mins < 10 ? "0" + mins : mins
const hour = hours > 12 ? hours % 12 : hours;
let day = week[days];
let month = yearMonths[months];
const amPm = hours >= 12 ? "PM" : "AM"

setInterval(()=> {
    time.textContent = `${hour}:${min} ${amPm}`
    date.textContent = `${day}, ${dateDay} ${month}`
}, 1000);

searchBtn.addEventListener("click", getWeatherData);


async function getWeatherData(){
    const cityName = cityInput.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=af13509a3a39fda2a67910f9f88bf77a`);
    const data = await response.json();
    tempReport.textContent = `${Math.round(data.main.temp)}°C`;
    cityReport.textContent = cityInput.value;
    pressureReport.textContent = data.main.pressure
    windReport.textContent = `${data.wind.speed} km/h`;
    humidityReport.textContent = `${data.main.humidity}%`
    weatherReport.textContent = data.weather[0].main
    cityInput.value = ""
}

getWeatherData()

