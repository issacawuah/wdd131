// Simulate fetching weather data
function getWeatherData() {
    return new Promise((resolve) => {
        // Simulated weather data
        const weatherData = {
            description: "Sunny",
            temperature: "25°C",
            windSpeed: "15 km/h",
            windChill: "24°C"
        };
        resolve(weatherData);
    });
}

// Function to update the weather section
function updateWeather() {
    getWeatherData().then(data => {
        document.getElementById("weather-description").innerText = data.description;
        document.getElementById("temperature").innerText = data.temperature;
        document.getElementById("wind-speed").innerText = data.windSpeed;
        document.getElementById("wind-chill").innerText = data.windChill;
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    });
}

// Call the function to update the weather
updateWeather(); 

