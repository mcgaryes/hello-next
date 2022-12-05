import {ReactNode, useReducer} from "react";
import {themeReducer} from "@/context/theme/theme-reducer";
import {ThemeContext} from "@/context/theme/theme-context";
import {initialThemeState} from "@/context/theme/theme-state";

interface ThemeProviderProps {
    children: ReactNode | ReactNode[]
}

export function ThemeProvider(props: ThemeProviderProps) {

    const [state, dispatch] = useReducer(themeReducer, initialThemeState)

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
