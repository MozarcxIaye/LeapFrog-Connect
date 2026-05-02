
const WeatherResult = ({ weather, loading }) => {
    return (
        <section id="weather-result">

            {loading ? <p>Loading the Weather details...</p> : 
            
            weather &&
                <div>
                <h2>{weather.name}</h2>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Condition: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Sea Level: {weather.main.sea_level}m</p>
                <p>Wind Speed: {weather.wind.speed}m/s</p>
                </div>
            
        }
        </section>
    )
}

export default WeatherResult