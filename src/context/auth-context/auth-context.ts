import {createContext, Dispatch} from "react";
import {AuthAction} from "@/context/auth-context/auth-actions";
import {AuthState, initialAuthState} from "@/context/auth-context/auth-state";
import {noop} from "@/utilities/noop";

export const AuthContext = createContext<{ state: AuthState, dispatch: Dispatch<AuthAction> }>({
    state: initialAuthState,
    dispatch: noop
});
