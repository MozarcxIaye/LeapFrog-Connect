import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Meetings from "./pages/Meetings"

import {Routes, Route} from "react-router"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/meetings" element={<Meetings/>} />
      </Route>
    </Routes>
    
  )
}

export default App