import { useEffect, useState } from "react"
import "./LiveClock.css"

const LiveClock = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
  
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="main">
      <div className="live-clock">
        {time}
      </div>

      <div className="live-date">
        {date}
      </div>
    </div>
    
  )
}

export default LiveClock