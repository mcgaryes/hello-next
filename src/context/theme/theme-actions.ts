export enum ThemeActionType {
    setTheme,
}

export interface ThemeAction {
    type: ThemeActionType
    payload?: any
}
