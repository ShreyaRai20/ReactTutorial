import React, {useState, useEffect} from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import Card from './Card'
import ThemeBtn from './ThemeBtn'

function ThemeSwitcher() {
    const [themeMode, setThemeMode] = useState("light")
    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }

    // actual change in theme

    useEffect(() =>{
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode]) 

  return (
    <>
    <ThemeProvider value =  {{ themeMode, darkTheme, lightTheme }}>
        <div className='text-black bg-white dark: text-white dark: bg-black'>
           <div> Card </div> 
        
           <ThemeBtn/>

        </div>
    </ThemeProvider>
    </>

  )
}

export default ThemeSwitcher
