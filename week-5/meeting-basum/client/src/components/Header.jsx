
import { useTheme } from "../hooks/useTheme"

const Header = () => {

    const {mode, toggle} = useTheme()
   

  return (
    <div>
        <header className="nav">
            <div className="logo-meeting-basum">
                <h2>Meeting Basum</h2>
            </div>
            <div className="nav-link">
                <button onClick={toggle}>Toggle Theme: {mode}</button>
            </div>
        </header>
     
    </div>
  )
}

export default Header