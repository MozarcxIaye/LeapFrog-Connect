
const Titlebar = ({setCity, setWeather}) => {

    function handleCloseWindow() {
        setWeather(null)
        setCity("")
    }

  return (
     <div className="title-bar">
            <span>Weather.app</span>
            <span onClick={handleCloseWindow}>[x]</span>
        </div>
  )
}

export default Titlebar
