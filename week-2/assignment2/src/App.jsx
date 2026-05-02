import { useState } from 'react'
import Titlebar from './components/Titlebar'
import WindowContent from './components/WindowContent'


function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const API_KEY = import.meta.env.VITE_API_KEY

  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const fetchWeather = async () => {

    setLoading(true)
    setError("")
    setWeather(null)

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      const response = await fetch(url)

      // if (!weather) throw new Error(`Could not find the weather data for the city ${city}`)

      if (!response.ok) throw new Error(response.status == 404 ? "City not found. Please check the typo." : "Something went wrong. Please try again")

      const data = await response.json()
      setWeather(data)
      console.log(data)

    } catch (error) {
      setError(error.message)
      console.error("Failed to fetch the weather")
    } finally {
      setLoading(false)
    }

  }

  return (
    <main className='main'>
      <Titlebar setCity={setCity} setWeather={setWeather} />
      <WindowContent
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        weather={weather}
        loading={loading}
        error={error} />
    </main>
  )
}

export default App
