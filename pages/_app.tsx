import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../components/header";
import Footer from "../components/footer";
import {createContext, ReactNode, ReducerAction, ReducerState, useReducer} from "react";
import {appReducer, AppState} from "../reducers/app-reducer";

export const AppContext = createContext({} as AppState);

interface ApplicationProviderProps {
    children: ReactNode[]
}

const AppProvider = (props: ApplicationProviderProps) => {

    const [state, dispatch] = useReducer(appReducer, {latLong: "", locations: []})

    console.log(state);

    return (
        <AppContext.Provider value={state}>
            {props.children}
        </AppContext.Provider>
    )

}

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppProvider>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </AppProvider>
    )
}
