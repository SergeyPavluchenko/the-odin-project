import { getWeather } from "./api.js";
import "./style.css";

let currentUnit = "metric";
let currentCity = "";

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const main = document.createElement("div");
main.classList.add("main");

const toggleBox = document.createElement("div");
toggleBox.classList.add("toggleBox");

const title = document.createElement("h1");
title.textContent = "Weather App";

const form = document.createElement("form");

const input = document.createElement("input");
input.placeholder = "Enter city";
input.type = "text";

const buttonSearch = document.createElement("button");
buttonSearch.textContent = "Search";
buttonSearch.type = "submit";

const celsiusBtn = document.createElement("button");
celsiusBtn.textContent = "°C";
celsiusBtn.type = "button";
celsiusBtn.classList.add('active')

const fahrenheitBtn = document.createElement("button");
fahrenheitBtn.textContent = "°F";
fahrenheitBtn.type = "button";

async function searchWeather(city, unit) {
    try {
        const weatherData = await getWeather(city, unit);
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(searchData) {
    const { city, temp, feelslike, humidity, conditions, icon } = searchData;

    main.textContent = "";

    const unitSymbol = currentUnit === "metric" ? "°C" : "°F";

    const roundTemp = Math.round(temp);
    const roundFeelslike = Math.round(feelslike);
    const roundHumidity = Math.round(humidity);
    const cityName = city.charAt(0).toUpperCase() + city.slice(1)
    const weatherIcons = {
        "clear-day": "☀️",
        "clear-night": "🌙",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "☁️",
        "cloudy": "☁️",
        "rain": "🌧️",
        "snow": "❄️",
        "fog": "🌫️",
        "wind": "💨",
    }

    document.body.className = icon;

    const cityTitle = document.createElement("h2");
    cityTitle.classList.add('city')
    cityTitle.textContent = cityName;

    const tempTitle = document.createElement("h2");
    tempTitle.classList.add("temperature");
    tempTitle.textContent = `Temperature: ${roundTemp} ${unitSymbol}`;

    const feelslikeTitle = document.createElement("h3");
    feelslikeTitle.textContent = `Feelslike: ${roundFeelslike} ${unitSymbol}`;

    const humidityTitle = document.createElement("h3");
    humidityTitle.textContent = `Humidity: ${roundHumidity} %`;

    const conditionsTitle = document.createElement("h3");
    conditionsTitle.textContent = `Conditions: ${conditions}`;

    const weatherIcon = document.createElement('div')
    weatherIcon.classList.add('weatherIcon')
    weatherIcon.textContent = weatherIcons[icon]

    main.append(
        cityTitle,
        weatherIcon,
        tempTitle,
        feelslikeTitle,
        humidityTitle,
        conditionsTitle,
    );
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (input.value === "") {
        return;
    }

    const searchData = await searchWeather(input.value, currentUnit);

    if (!searchData) {
        main.textContent = "City not found";
        return;
    }

    currentCity = input.value;

    displayWeather(searchData);

    input.value = "";
});

celsiusBtn.addEventListener("click", async () => {
    if (!currentCity) return;
    currentUnit = "metric";

    celsiusBtn.classList.add('active')
    fahrenheitBtn.classList.remove('active')

    const searchData = await searchWeather(currentCity, currentUnit);
    if (!searchData) {
        return;
    }
    displayWeather(searchData);
});

fahrenheitBtn.addEventListener("click", async () => {
    if (!currentCity) return;
    currentUnit = "us";

    fahrenheitBtn.classList.add('active')
    celsiusBtn.classList.remove('active')

    const searchData = await searchWeather(currentCity, currentUnit);
    if (!searchData) {
        return;
    }
    displayWeather(searchData);
});

toggleBox.append(celsiusBtn, fahrenheitBtn);
form.append(input, buttonSearch);
header.append(form, toggleBox);
content.append(title, header, main);
