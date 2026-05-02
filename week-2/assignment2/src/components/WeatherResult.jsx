
const WeatherResult = ({ weather, loading, error }) => {

    const handleResult = () => {

        const iconCode = weather.weather[0].icon 
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`

        return <div>
            <h2>{weather.name}</h2>
            <img src={iconUrl}></img>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Sea Level: {weather.main.sea_level}m</p>
            <p>Wind Speed: {weather.wind.speed}m/s</p>
        </div>
    }

    return (
        <section id="weather-result">

            {!loading && error && (
                <div className="error-result">
                    {error}
                </div>
            )}

            {loading ? <p>Loading the Weather details...</p> :

                weather && handleResult()
                
            }
        </section>
    )
}

export default WeatherResult