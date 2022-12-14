import Head from 'next/head'
import Modal from "@/modules/modal";
import {InferGetServerSidePropsType} from "next";
import {getLocationsNear} from "@/services/location/location-service";
import {withIronSessionSsr} from 'iron-session/next'
import {sessionOptions} from "@/services/session/session-service";
import {User} from "@/types/user";
import {Tab} from "@headlessui/react"
import {Fragment, useMemo} from "react";
import CodeView from "@/elements/code/code-view";
import SimpleTab from "@/elements/simple-tab/simple-tab";
import SimpleTabPanel from "@/elements/simple-tab-panel/simple-tab-panel";

export const getServerSideProps = withIronSessionSsr(async function ({req, res}) {

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

    const tabs = useMemo(() => {
        return [["Tab 1", "Content 1"], ["Tab 2", "Content 2"], ["Tab 3", "Content 3"]]
    }, [])

    return (

        <div className={"min-h-screen"}>

            <Head>
                <title>Local Beer - About</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"max-w-7xl md:mx-auto p-6"}>

                <h1 className={"text-2xl"}>About</h1>

                <CodeView value={props.locations[0]}/>


                <br/>

                <Tab.Group>

                    <Tab.List as={"div"} className={"flex flex-row mb-4"}>
                        {
                            tabs.map(tab =>
                                <SimpleTab key={tab[0]}>{tab[0]}</SimpleTab>
                            )
                        }
                    </Tab.List>

                    <Tab.Panels>
                        {
                            tabs.map(tab =>
                                <SimpleTabPanel key={tab[1]}>

                                    {{
                                        "Content 1": <Modal title={"Modal Title"}
                                                            body={"This is the copy that will make up the body of the modal"}
                                                            cta={"Call to action"}/>,
                                        "Content 2": <Modal title={"Modal Title"} cta={"Call to action"}>Testing one two
                                            three</Modal>,
                                        "Content 3": "Content 3",
                                    }[tab[1]]}

                                </SimpleTabPanel>
                            )
                        }
                    </Tab.Panels>

                </Tab.Group>

            </main>

        </div>
    )
}
