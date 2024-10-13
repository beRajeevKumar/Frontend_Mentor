const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  console.log("Executing...");
  
  if(inputBox.value === "") {
    alert("The field is empty!");
    return;
  }
  
  const api_key = "c726c328b68da1dd57231b76a50eaf12"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  
  try {
    const response = await fetch(url);
    const weather_data = await response.json();
    
    if (weather_data.cod === "404") {
      weather_img.src = "404.png";
      alert("Location not found");
      return;
    }

    // Update the DOM elements with fetched weather data
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

    // Set weather image according to the condition
    switch (weather_data.weather[0].main) {
      case "Clouds":
        weather_img.src = "cloud.png";
        break;
      case "Clear":
        weather_img.src = "clear.png";
        break;
      case "Rain":
        weather_img.src = "rain.png";
        break;
      case "Mist":
        weather_img.src = "mist.png";
        break;
      case "Snow":
        weather_img.src = "snow.png";
        break;
      default:
        weather_img.src = "default.png"; // Set a default weather image
    }
  } catch (error) {
    weather_img.src = "404.png";
    console.error("Error fetching weather data:", error);
  }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

// Trigger search when the Enter key is pressed
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkWeather(inputBox.value);
  }
});
