/**
 * @interface
 */
export interface AuthState {
    isLoggedIn: boolean
}

export const initialAuthState: AuthState = {
    isLoggedIn: true
}
