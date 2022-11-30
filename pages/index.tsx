import Head from 'next/head'
import Card from "../components/card";
import {GetStaticProps, GetStaticPropsContext} from "next";
import {Location} from "../models/location";
// import locations from "../data/locations.json"
// import {useEffect} from "react";
import axios from "axios";
import {LocationService} from "../services/location-service";

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

    const locationService = new LocationService()

    const locations = await locationService.getLocationsNear("43201")

    return {
        props: {
            locations
        }
    }

}

export default function Home(props: GetStaticProps) {

    return (

        <>

            <Head>
                <title>Local Beer - Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen max-w-7xl md:mx-auto p-6"}>

                <h1 className={"text-2xl mb-5"}>Local</h1>

                <div className={"relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>

                    {
                        // @ts-ignore
                        props.locations?.map((location: Location) => (

                            <Card key={location.id}
                                  id={location.id}
                                  rating={location.rating}
                                  title={location.name}
                                  image={location.images[0]}/>

                        ))
                    }

                </div>

            </main>

        </>
    )
}
