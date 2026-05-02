import SearchForm from "./SearchForm"
import WeatherResult from "./WeatherResult"


const WindowContent = ({city, setCity, fetchWeather, weather, loading}) => {
    return (
        <div className="window-content"> 
            <SearchForm city={city} setCity={setCity} fetchWeather={fetchWeather}/>
            <WeatherResult weather={weather} loading={loading}/>
        </div>
    )
}

export default WindowContent