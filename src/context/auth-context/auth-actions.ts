/**
 * @enum {number}
 */
export enum AuthActionType {
    login,
    logout
}

/**
 * @interface
 */
export interface AuthAction {
    type: AuthActionType
    payload?: any
}
