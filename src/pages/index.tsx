import Head from 'next/head'
import {GetStaticProps, InferGetStaticPropsType} from "next";
import axios from "axios";
import {LocationService} from "../services/location-service";
import useTrackLocation from "../hooks/track-location";
import {ArrowsUpDownIcon} from "@heroicons/react/24/outline/index";
import {useEffect, useReducer} from "react";
import LocationSection from "../components/location-section";
import {AppActionType, appReducer} from "../reducers/app-reducer";

const locationService = new LocationService()

export const getStaticProps: GetStaticProps = async () => {

    const locations = await locationService.getLocationsNear()

    return {
        props: {
            locations
        }
    }

}

export default function Home(staticProps: InferGetStaticPropsType<typeof getStaticProps>) {

    const {locations} = staticProps;
    const {handleTrackLocation} = useTrackLocation()

    // const [state, dispatch] = useReducer(appReducer, {latLong: "", locations: []})
    //
    // useEffect(() => {
    //
    //     if (state.latLong !== "") {
    //
    //         (async () => {
    //
    //             let locationsResponse = await axios.get(`/api/locations?ll=${state.latLong}`);
    //
    //             dispatch({
    //                 type: AppActionType.SET_LOCATIONS,
    //                 payload: locationsResponse.data
    //             });
    //
    //         })()
    //     }
    //
    // }, [state])

    return (

        <>

            <Head>
                <title>Local Beer - Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen max-w-7xl md:mx-auto px-6 pb-6 pt-12"}>

                <div className={"flex flex-row justify-end mb-5 md:px-4 gap-x-2"}>

                    <button
                        className={"px-4 py-2 rounded-md drop-shadow bg-gray-100 inline-flex gap-x-2 items-center"}>
                        Sort<ArrowsUpDownIcon width={20} height={20}/>
                    </button>
                    <button onClick={() => handleTrackLocation()}
                            className={"px-4 py-2 rounded-md drop-shadow bg-gray-100"}>
                        Search Near Me
                    </button>

                </div>

                {/*{*/}
                {/*    state.locations.length > 0 &&*/}
                {/*    <LocationSection title={state.locations[0].city}*/}
                {/*                     locations={state.locations}*/}
                {/*                     className={"mb-12"}/>*/}
                {/*}*/}

                <LocationSection title="Ohio" locations={locations}/>

            </main>

        </>
    )
}
