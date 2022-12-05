import {ReactNode, useReducer} from "react";
import {authReducer} from "@/context/auth-context/auth-reducer";
import {AuthContext} from "@/context/auth-context/auth-context";
import {initialAuthState} from "@/context/auth-context/auth-state";

/**
 * @interface
 */
interface AuthProviderProps {
    children: ReactNode | ReactNode[]
}

/**
 * @param props {AuthProviderProps}
 * @constructor HOC for wrapping the passed children in the AuthContext provider.
 */
export function AuthProvider(props: AuthProviderProps) {

    const [state, dispatch] = useReducer(authReducer, initialAuthState)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )

}
