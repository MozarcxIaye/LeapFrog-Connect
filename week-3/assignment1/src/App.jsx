import { useEffect, useState } from "react"
import LiveClock from "./components/LiveClock"
import "./App.css"


const App = () => {

  return (
    <div className="main">
      <LiveClock/>
    </div>
  )
}

export default App