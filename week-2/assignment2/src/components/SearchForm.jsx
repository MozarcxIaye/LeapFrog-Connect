
const SearchForm = ({city, setCity, fetchWeather}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeather()
        console.log("form submitted")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="city-input" type="text" placeholder="CITY NAME..." value={city} onChange={(e) => setCity(e.target.value)}/>
            <button id="search-btn" type="submit">FIND</button>
        </form>
    )
}
export default SearchForm
