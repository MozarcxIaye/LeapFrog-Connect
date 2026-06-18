
import { ThemeContext } from "../contexts/ThemeContext";
import { useMemo, useState } from "react";

export const ThemeProvider = ({children}) => {

    const [mode, setMode] = useState("light")

    const value = useMemo(() => ({
        mode, 
        toggle: () => {

            setMode((current) => (current === "light" ? "dark" : "light"),
                document.documentElement.setAttribute("data-theme", mode)
            )
        }
    }), [mode])
    
    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}




