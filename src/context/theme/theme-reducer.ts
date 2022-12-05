import {ThemeAction, ThemeActionType} from "@/context/theme/theme-actions";
import {ThemeState} from "@/context/theme/theme-state";

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {

    switch (action.type) {
        case ThemeActionType.setTheme:
            return {...state, theme: action.payload}
        default:
            return state
    }

}
