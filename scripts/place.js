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

// Function to calculate wind chill factor (simplified as per criteria)
function calculateWindChill(temperature, windSpeed) {
    // Example formula for wind chill (if conditions are met)
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }
    return temperature; // Return temperature if conditions are not met
}

// Function to update the weather section
function updateWeather() {
    getWeatherData().then(data => {
        document.getElementById("weather-description").innerText = data.description;
        document.getElementById("temperature").innerText = data.temperature;
        document.getElementById("wind-speed").innerText = data.windSpeed;
        document.getElementById("wind-chill").innerText = calculateWindChill(parseFloat(data.temperature), parseFloat(data.windSpeed)).toString() + "°C"; // Call wind chill calculation
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    });
}

// Call the function to update the weather
updateWeather();

// Set the current year in the footer
document.getElementById("currentyear").innerText = new Date().getFullYear();
