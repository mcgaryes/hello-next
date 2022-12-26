import Head from 'next/head'
import Modal from "@/modules/modal";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Tab} from "@headlessui/react"
import {useMemo} from "react";
import SimpleTab from "@/elements/simple-tab/simple-tab";
import SimpleTabPanel from "@/elements/simple-tab-panel/simple-tab-panel";
import {withSSRContext} from "aws-amplify";
import {logger} from "@/utilities/logger";

export const getServerSideProps: GetServerSideProps<any> = async (context) => {

    const {Auth} = withSSRContext(context)

    try {

        const user = await Auth.currentAuthenticatedUser()

        logger.debug(user);

        return {
            props: {
                authenticated: true
            }
        }

    } catch (error) {

        console.error(error);

        return {
            props: {
                authenticated: false
            }
        }
    }
}

function About(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const tabs = useMemo(() => {
        return [["Tab 1", "Content 1"], ["Tab 2", "Content 2"], ["Tab 3", "Content 3"]]
    }, [])

    if (!props.authenticated) {
        return <div>Not Authenticated</div>
    }

    return (

        <div className={"min-h-screen"}>

            <Head>
                <title>Local Beer - About</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"max-w-7xl md:mx-auto p-6"}>

                <h1 className={"text-2xl"}>About</h1>

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

export default About;
