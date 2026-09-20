const API_KEY = 'ZLXW8S7FP8DX6Q8R7RGA6CXA3'
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

async function getWeather(city, unit) {
    const url = `${BASE_URL}${city}?key=${API_KEY}&unitGroup=${unit}`
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    const weatherData = {
        city: data.address,
        temp: data.currentConditions.temp,
        feelslike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        conditions: data.currentConditions.conditions,
        icon: data.currentConditions.icon
    }
    return weatherData
}


export { getWeather }


