import {AuthAction, AuthActionType} from "@/context/auth-context/auth-actions";
import {AuthState} from "@/context/auth-context/auth-state";

/**
 *
 * @param state {AuthState}
 * @param action {AuthAction}
 * @return AuthState
 */
export function authReducer(state: AuthState, action: AuthAction): AuthState {

    switch (action.type) {
        case AuthActionType.login:
            return {...state, isLoggedIn: true}
        case AuthActionType.logout:
            return {...state, isLoggedIn: false}
        default:
            return state
    }

}
