import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3000;

const API_KEY = process.env.API_KEY;

const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

app.get("/api/weather", async (req, res) => {
    const city = req.query.city?.trim();
    const unit = req.query.unit;

    if (!city) {
        return res.status(400).json({
            error: "City name is required",
        });
    }

    if (!["metric", "us"].includes(unit)) {
        return res.status(400).json({
            error: "Invalid temperature unit",
        });
    }

    if (!API_KEY) {
        return res.status(500).json({
            error: "API key is missing",
        });
    }

    try {
        const url = new URL(
            `${BASE_URL}${encodeURIComponent(city)}`
        );

        url.searchParams.set("key", API_KEY);
        url.searchParams.set("unitGroup", unit);

        const response = await fetch(url);

        if (!response.ok) {
            return res.status(502).json({
                error: "Weather service request failed",
            });
        }

        const data = await response.json();

        const weatherData = {
            city: data.address,
            temp: data.currentConditions.temp,
            feelslike: data.currentConditions.feelslike,
            humidity: data.currentConditions.humidity,
            conditions: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
        };

        res.json(weatherData);

    } catch (error) {
        console.error("Weather API error:", error);

        res.status(500).json({
            error: "Unable to get weather data",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});