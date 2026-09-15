import { getWeather } from "./api.js";

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");

const main = document.createElement("div");
main.classList.add("main");

const title = document.createElement("h1");
title.textContent = "Weather App";

const form = document.createElement("form");

const input = document.createElement("input");
input.placeholder = "Enter city";
input.type = "text";

const buttonSearch = document.createElement("button");
buttonSearch.textContent = "Search";
buttonSearch.type = "submit";

async function searchWeather(city) {
    const weatherData = await getWeather(city);
    return weatherData;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchData = await searchWeather(input.value);

    main.textContent = "";

    const { city, temp, feelslike, humidity, conditions } = searchData;

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

form.append(input, buttonSearch);
header.append(form);
content.append(title, header, main);
