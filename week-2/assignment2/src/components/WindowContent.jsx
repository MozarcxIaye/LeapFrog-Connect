import SearchForm from "./SearchForm"
import WeatherResult from "./WeatherResult"


const WindowContent = ({city, setCity, fetchWeather, weather, loading, error}) => {
    return (
        <div className="window-content"> 
            <SearchForm city={city} setCity={setCity} fetchWeather={fetchWeather}/>
            <WeatherResult weather={weather} loading={loading} error={error}/>
        </div>
    )
}

export default WindowContent