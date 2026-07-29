import { useContext , createContext } from "react";

export const ThemeContext = createContext(
    {
        theme : "Light",
        darktheme : () => {},
        lighttheme : () => {}
    }
)

export const ThemeProvider = ThemeContext.Provider; 

export const useTheme = () => {
    return useContext(ThemeContext);
}