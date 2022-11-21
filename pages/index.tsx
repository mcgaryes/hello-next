import Head from 'next/head'
import styles from '../styles/home.module.css'
import {PrimaryButton} from "../components/buttons/primary";
import Banner from "../components/banner";

export default function Home() {
    return (

        <div className={"main"}>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Local Brewpubs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <Banner/>
                </div>
            </main>

        </div>
    )
}
