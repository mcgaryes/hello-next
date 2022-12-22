import '../styles/globals.css'
import type {AppProps, NextWebVitalsMetric} from 'next/app'
import '@tremor/react/dist/esm/tremor.css';
import {Amplify} from "aws-amplify";
import awsConfig from "../aws-exports"
import '@aws-amplify/ui-react/styles.css';
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import {logger} from "@/utilities/logger";

Amplify.configure({...awsConfig, ssr: true})

export function reportWebVitals(metric: NextWebVitalsMetric) {
    logger.debug(metric)
}

export default function App({Component, pageProps}: AppProps) {

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
