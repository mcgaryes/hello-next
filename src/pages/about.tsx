import Head from 'next/head'
import Modal from "@/modules/modal";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {delay} from "@/utilities/delay";
import {getLocationsNear} from "@/services/location/location-service";
import CodeView from "@/elements/code-view";
import {withIronSessionSsr} from 'iron-session/next'
import {sessionOptions} from "@/services/session/session-service";
import {User} from "@/types/user";
import {logger} from "@/utilities/logger";
import {useEffect} from "react";
import {useInterval} from "usehooks-ts";

export const getServerSideProps = withIronSessionSsr(async function ({req, res}) {

    logger.debug("Get server side props");

    const {user} = req.session

    if (user === undefined) {
        res.setHeader('location', '/login')
        res.statusCode = 302
        res.end()
        return {
            props: {
                user: {isLoggedIn: false, login: '', avatarUrl: ''} as User,
                locations: []
            },
        }
    }

    let locations = await getLocationsNear()

    // the page will not render until the above finishes
    return {
        props: {
            user: req.session.user,
            locations
        }, // Will be passed to the page component as props
    }

}, sessionOptions)

export default function About(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (

        <div className={"min-h-screen"}>

            <Head>
                <title>Local Beer - About</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"max-w-7xl md:mx-auto p-6"}>

                <h1 className={"text-2xl"}>About</h1>

                <CodeView value={props.locations[0]}/>

                <Modal/>

            </main>

        </div>
    )
}
