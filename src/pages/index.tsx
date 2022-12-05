import Head from 'next/head'
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {ArrowsUpDownIcon} from "@heroicons/react/24/outline/index";
import locationService from "../services/location/location-service";
import LocationSection from "@/modules/location-section";
import {useContext} from "react";
import {AuthActionType} from "@/context/auth-context/auth-actions";
import {AuthContext} from "@/context/auth-context/auth-context";

export const getStaticProps: GetStaticProps = async () => {

    let locations = await locationService.getLocationsNear();

    return {
        props: {
            locations
        }
    }

}

export default function Home(staticProps: InferGetStaticPropsType<typeof getStaticProps>) {

    const {locations} = staticProps;
    const {state, dispatch} = useContext(AuthContext);

    return (

        <div className={"bg-white dark:bg-gray-800"}>

            <Head>
                <title>Local Beer - Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen max-w-7xl md:mx-auto px-6 pb-6 pt-12"}>

                {JSON.stringify(state)}

                <div className={"flex flex-row justify-end mb-5 md:px-4 gap-x-2"}>

                    <button
                        className={"px-4 py-2 rounded-md drop-shadow bg-gray-100 inline-flex gap-x-2 items-center"}>
                        Sort<ArrowsUpDownIcon width={20} height={20}/>
                    </button>
                    <button onClick={() => dispatch({type: AuthActionType.logout})}
                            className={"px-4 py-2 rounded-md drop-shadow bg-gray-100"}>
                        Search Near Me
                    </button>

                </div>

                <LocationSection title="Ohio"
                                 locations={locations}
                                 className={"mb-10"}/>

                {
                    state.isLoggedIn ?
                        <div>Logged in content</div> :
                        <div>Logged out content</div>
                }

            </main>

        </div>
    )
}
