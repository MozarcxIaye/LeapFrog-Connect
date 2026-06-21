import {Routes, Route} from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App