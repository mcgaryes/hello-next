import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AuthProvider} from "@/context/auth-context/auth-provider";
import {ThemeProvider} from "@/context/theme/theme-provider";
import {MainLayout} from "@/layouts/main-layout";
import {LocationProvider} from "@/context/location/location-provider";
import '@tremor/react/dist/esm/tremor.css';

export default function App({Component, pageProps}: AppProps) {

    return (
        <LocationProvider>
            <ThemeProvider>
                <AuthProvider>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </AuthProvider>
            </ThemeProvider>
        </LocationProvider>
    )
}
