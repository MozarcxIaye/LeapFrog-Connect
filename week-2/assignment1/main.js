

// select the elements
const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-btn")
const weatherResult = document.getElementById("weather-result")



// fetch the weather
async function fetchWeather(city) {

    const API_KEY = ""

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json()
    return data
}


// render the weather
function renderWeather(data) {

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    weatherResult.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature:${data.main.temp}</p>
          <img src="${iconUrl}" alt="${data.weather[0].description}" />
          <p>Condition:${data.weather[0].description}</p>
          <p>Humidity:${data.main.humidity}</p>
          <p>Sea Level: ${data.main.sea_level}</p>`
}

// for submitting the form
async function handleSubmit(e) {

    e.preventDefault()
    // to handle the from submission 
    const city = cityInput.value

    if(!city) return 
    const weather = await fetchWeather(city)
    renderWeather(weather)
}