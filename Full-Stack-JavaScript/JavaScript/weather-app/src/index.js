import { getWeather } from "./api.js";


let currentUtit = 'metric'
let currentCity = ''

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const main = document.createElement("div");
main.classList.add("main");

const toggleBox = document.createElement('div')
toggleBox.classList.add('toggleBox')

const title = document.createElement("h1");
title.textContent = "Weather App";

const form = document.createElement("form");

const input = document.createElement("input");
input.placeholder = "Enter city";
input.type = "text";

const buttonSearch = document.createElement("button");
buttonSearch.textContent = "Search";
buttonSearch.type = "submit";

const celsiusBtn = document.createElement('button')
celsiusBtn.textContent = '°C'
celsiusBtn.type = 'button'

const fahrenheitBtn = document.createElement('button')
fahrenheitBtn.textContent = '°F'
fahrenheitBtn.type = 'button'

async function searchWeather(city, unit) {
    const weatherData = await getWeather(city, unit);
    return weatherData;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchData = await searchWeather(input.value, 'metric');

    main.textContent = "";

    const { city, temp, feelslike, humidity, conditions } = searchData;

    currentCity = input.value

    const cityTitle = document.createElement("h2");
    cityTitle.textContent = `City: ${city}`;

    const tempTitle = document.createElement("h2");
    tempTitle.textContent = `Temperature: ${temp}`;

    const feelslikeTitle = document.createElement("h2");
    feelslikeTitle.textContent = `Feelslike: ${feelslike}`;

    const humidityTitle = document.createElement("h2");
    humidityTitle.textContent = `Humidity: ${humidity}`;

    const conditionsTitle = document.createElement("h2");
    conditionsTitle.textContent = `Conditions: ${conditions}`;

    main.append(
        cityTitle,
        tempTitle,
        feelslikeTitle,
        humidityTitle,
        conditionsTitle,
    );

    input.value = "";
});

celsiusBtn.addEventListener('click', () => {
    currentUtit = 'metric'
})

fahrenheitBtn.addEventListener('click', () => {
    currentUtit = 'us'
})

toggleBox.append(celsiusBtn, fahrenheitBtn)
form.append(input, buttonSearch);
header.append(form, toggleBox);
content.append(title, header, main);
