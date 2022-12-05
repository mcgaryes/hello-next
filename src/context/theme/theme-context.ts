import {createContext, Dispatch} from "react";
import {ThemeAction} from "@/context/theme/theme-actions";
import {ThemeState, initialThemeState} from "@/context/theme/theme-state";
import {noop} from "@/utilities/noop";

export const ThemeContext = createContext<{ state: ThemeState, dispatch: Dispatch<ThemeAction> }>({
    state: initialThemeState,
    dispatch: noop
});
