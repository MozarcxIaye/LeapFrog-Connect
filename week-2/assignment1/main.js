

// select the elements
const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-btn")
const weatherResult = document.getElementById("weather-result")



// fetch the weather
async function fetchWeather(city) {

    try {

        if (!city) throw new Error("City not found")

        const API_KEY = ""

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

        if (!response.ok) throw new Error("City not found")

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
    }

}


// render the weather
function renderWeather(data) {

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    weatherResult.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${iconUrl}" alt="${data.weather[0].description}" />
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Sea Level: ${data.main.sea_level}</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>`
}

// for submitting the form
async function handleSubmit(e) {

    e.preventDefault()
    // to handle the from submission 
    const city = cityInput.value.trim()
    weatherResult.textContent = "Loading weather data..."
    try {
        if (!city) throw new Error("City not found")

        const weather = await fetchWeather(city)

        if(!weather) throw new Error(`Could not find the weather data for the city ${city}`)

        renderWeather(weather)
        // console.log(weather)
    } catch (error) {
        weatherResult.textContent = error.message
        console.error(error)

        // console.log(error)
    }
}