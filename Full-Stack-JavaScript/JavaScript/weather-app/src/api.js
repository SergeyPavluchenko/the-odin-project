// const API_KEY = process.env.API_KEY
// const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

// async function getWeather(city, unit) {
//     const encodedCity = encodeURIComponent(city.trim())
//     const url = `${BASE_URL}${encodedCity}?key=${API_KEY}&unitGroup=${unit}`
//     const response = await fetch(url)

//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }

//     const data = await response.json()
//     const weatherData = {
//         city: data.address,
//         temp: data.currentConditions.temp,
//         feelslike: data.currentConditions.feelslike,
//         humidity: data.currentConditions.humidity,
//         conditions: data.currentConditions.conditions,
//         icon: data.currentConditions.icon
//     }
//     return weatherData
// }


// export { getWeather }


async function getWeather(city, unit) {
    const encodedCity = encodeURIComponent(city.trim());

    const url = `/api/weather?city=${encodedCity}&unit=${unit}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const weatherData = await response.json();

    return weatherData;
}

export { getWeather };