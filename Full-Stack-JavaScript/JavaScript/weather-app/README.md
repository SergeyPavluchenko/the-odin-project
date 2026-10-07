# Weather App

A weather application built as part of The Odin Project.

## Features

- Search weather by city
- Display temperature
- Display feels-like temperature
- Display humidity
- Display weather conditions
- Celsius / Fahrenheit toggle
- Dynamic background depending on weather
- Error message for invalid city

## Technologies

- JavaScript
- Webpack
- ES Modules
- Fetch API
- async/await
- Visual Crossing Weather API

## What I Practiced

- Working with APIs
- Handling asynchronous code
- Using async/await
- Rendering data to the DOM
- Error handling
- Separating API logic from UI logic

## How to Run

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
API_KEY=your_visual_crossing_api_key
```

Replace `your_visual_crossing_api_key` with your own Visual Crossing API key.

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Future Improvements

- Add a loading state
- Add better error messages
- Add a multi-day forecast
- Improve mobile layout
- Avoid exposing private API keys in public code

## Note

This project was created for learning purposes as part of The Odin Project.
