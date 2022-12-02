import Head from 'next/head'

export default function Home() {

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
