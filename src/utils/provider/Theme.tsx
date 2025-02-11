'use client';

import { createContext, useState } from "react";


export const ThemeContext =  createContext<null|{dark: boolean, toggle: () => void}>(null);


export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

    const [dark, setDark] = useState(true);

    const toggle = () => {
        setDark((prev) => !prev);
    }

    return (
        <ThemeContext value={{dark, toggle}}>
            <html lang="en" className={dark? "dark": ""}>
            {children}
            </html>
        </ThemeContext>
    )
}