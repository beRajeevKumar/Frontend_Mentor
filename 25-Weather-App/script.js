const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  console.log("Executing...");
  if(inputBox.value == ""){
    alert("The field is empty!")
  }
  const api_key = "c726c328b68da1dd57231b76a50eaf12";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  console.log("Done...");
  const response = await fetch(url);
  const weather_data = await response.json();
  console.log(weather_data);

  try {
    if (weather_data.cod === "404") {
      weather_img.src = "404.png";
      alert("Location not found");
      return;
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

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
      }
    } catch (error) {
      weather_img.src = "404.png";
      console.log("Error fetching weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
