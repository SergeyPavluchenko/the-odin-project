import { getWeather } from "./api.js";
import "./style.css";

let currentUnit = "metric";
let currentCity = "";

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const main = document.createElement("div");
main.classList.add("main");

const status = document.createElement("p")
status.classList.add("status")
status.setAttribute("aria-live", "polite")

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
    const weatherData = await getWeather(city, unit);
    return weatherData;
}

async function refreshWeather(unit) {
    if (!currentCity) {
        return
    }
    status.textContent = "Loading..."
    try {
        const sarchData = await searchWeather(currentCity, unit)

        currentUnit = unit
        displayWeather(searchData)

        celsiusBtn.classList.toggle("active", unit === "metric")
        fahrenheitBtn.classList.toggle("active", unit === "us")

        status.textContent = "";

    } catch (error) {
        status.textContent = "Unable to update weather. Please try again.";
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
    weatherIcon.textContent = weatherIcons[icon] || "🌤️";

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

    const city = input.value.trim()

    if (!city) {
        status.textContent = "Please enter a city name";
        return
    }

    main.textContent = "Loading...";

    try {
        const searchData = await searchWeather(city, currentUnit);

        if (!searchData) {
            main.textContent = "City not found";
            return;
        }

        currentCity = city;

        displayWeather(searchData);

        city = "";
        status.textContent = ""

    } catch (error) {
        status.textContent = 'Unable to load weather data. Please try again.'
    }

});

celsiusBtn.addEventListener("click", async () => {
    refreshWeather("metric")
});

fahrenheitBtn.addEventListener("click", async () => {
    refreshWeather("us")
});

toggleBox.append(celsiusBtn, fahrenheitBtn);
form.append(input, buttonSearch);
header.append(form, toggleBox);
content.append(title, header, main, status);
