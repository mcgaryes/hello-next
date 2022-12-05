import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {AuthProvider} from "@/context/auth-context/auth-provider";
import {ThemeProvider} from "@/context/theme/theme-provider";
import {MainLayout} from "@/layouts/main-layout";

export default function App({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider>
            <AuthProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </AuthProvider>
        </ThemeProvider>
    )
}
