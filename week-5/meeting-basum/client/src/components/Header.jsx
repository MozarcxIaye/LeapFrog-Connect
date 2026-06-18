
import { useTheme } from "../hooks/useTheme"

const Header = () => {

    const {mode, toggle} = useTheme()

  return (
    <div>
        <main>
            <div className="logo-meeting-basum">
                <h2>Meeting Basum</h2>
            </div>
            <div>
                <button onClick={toggle}>Toggle Theme: {mode}</button>
            </div>
        </main>
    </div>
  )
}

export default Header