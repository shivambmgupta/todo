import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeTogglerContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}
export const useThemeToggler = () => {
    return useContext(ThemeTogglerContext);
}

export default (props) => {
    const [isDark, toggleIsDark] = useState(true);
    const toggleTheme = () => {
        toggleIsDark(isDark => !isDark)   
    }
    return (
        <ThemeContext.Provider value={isDark}>
            <ThemeTogglerContext.Provider value={toggleTheme}>
                {props.children}
            </ThemeTogglerContext.Provider>
        </ThemeContext.Provider>
    );
}