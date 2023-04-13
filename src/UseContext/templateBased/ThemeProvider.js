import React, {useContext, useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


//custom hook for update
export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeToggle() {
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(false)
    function toggleTheme() {
        setDarkTheme(prevState => !prevState)
    }
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}