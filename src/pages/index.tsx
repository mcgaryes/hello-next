import Head from 'next/head'
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {ArrowsUpDownIcon} from "@heroicons/react/24/outline/index";
import LocationSection from "@/modules/location-section";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/context/auth-context/auth-context";
import {LocationContext} from "@/context/location/location-context";
import {LocationActionType} from "@/context/location/location-actions";
import useTrackLocation from "@/hooks/track-location";
import {getLocationsNear} from "@/services/location/location-service";
import {logger} from "@/utilities/logger";

export const getStaticProps: GetStaticProps = async () => {

    let locations = await getLocationsNear();

    return {
        props: {
            locations
        }
    }

}

export default function Home(staticProps: InferGetStaticPropsType<typeof getStaticProps>) {

    const {locations} = staticProps;
    const locationContext = useContext(LocationContext);
    const {state, dispatch} = useContext(AuthContext);
    const {latLong, handleTrackLocation} = useTrackLocation();

    useEffect( () => {


        console.log(locationContext.state.latLong);

        (async () => {
            if (locationContext.state.latLong != "" && locationContext.state.locations.length == 0) {
                let result = await fetch(`/api/locations?ll=${locationContext.state.latLong}`)
                let locations = await result.json()
                locationContext.dispatch({type: LocationActionType.setLocations, payload: locations})
            }
        })()


    }, [locationContext])

    return (

        <div className={"bg-white dark:bg-gray-800"}>

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

                {
                    locationContext.state.locations.length > 0 &&
                    <LocationSection title={locationContext.state.locations[0].city}
                                     locations={locationContext.state.locations}
                                     className={"mb-10"}/>
                }

                <LocationSection title="Ohio"
                                 locations={locations}
                                 className={"mb-10"}/>

            </main>

        </div>
    )
}
