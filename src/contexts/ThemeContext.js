"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [ themeLight, setThemeLight ] = useState(false)

    useEffect(() => {
        const themeName = 
            localStorage.getItem('theme') ??
            document.documentElement.getAttribute('data-theme') ??
            'dark'
        setThemeLight(themeName === 'light')
    }, [])

    useEffect(() => {
        const themeName = themeLight ? 'light' : 'dark'
        localStorage.setItem('theme', themeName)
        document.documentElement.setAttribute('data-theme', themeName)
    }, [themeLight])

    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    )
}