import Head from 'next/head'
import Card from "../components/card";
import {GetStaticProps} from "next";

export default function Home(props: GetStaticProps) {

    return (

        <div className={"min-h-screen"}>

            <Head>
                <title>Local Beer - About</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"max-w-7xl md:mx-auto p-6"}>

                <div>About</div>

            </main>

        </div>
    )
}
