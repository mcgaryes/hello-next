import Head from "next/head";
import {useState} from "react";
import useUser from "@/hooks/user";

export default function Login() {

    const {mutateUser} = useUser({
        redirectTo: '/about',
        redirectIfFound: true,
    })

    return (

        <div className={"bg-white dark:bg-gray-800"}>

            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen max-w-7xl md:mx-auto px-6 pb-6 pt-12"}>

                <form onSubmit={(async (event) => {
                    event.preventDefault()

                    const body = {
                        username: event.currentTarget.email.value
                    }

                    try {


                        mutateUser(
                            await fetch('/api/login', {
                                    method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(body),
                                }
                            ).then(value => {
                                return value.json()
                            })
                        )


                    } catch (error) {
                        if (error) {
                            console.error(error)
                        } else {
                            console.error('An unexpected error happened:', error)
                        }
                    }
                })}>

                    <label htmlFor={"email"}>Email</label><br/>
                    <input className={"border-2"} type={"email"} id={"email"} /><br/><br/>

                    <label htmlFor={"password"}>Password</label><br/>
                    <input className={"border-2"} type={"password"} id={"password"}/><br/><br/>

                    <input type={"submit"}/>

                </form>

            </main>
        </div>
    )
}
