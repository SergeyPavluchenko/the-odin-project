const API_KEY = 'ZLXW8S7FP8DX6Q8R7RGA6CXA3'
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

async function getWeather(city) {
    const url = `${BASE_URL}${city}?key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    const weatherData = {
        city: data.address,
        temp: data.currentConditions.temp,
        feelslike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        conditions: data.currentConditions.conditions
    }
    return weatherData
}


export { getWeather }


