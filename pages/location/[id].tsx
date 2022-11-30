import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import {Location} from "../../models/location";
import Head from "next/head";
import Image from "next/image"
import {LocationService} from "../../services/location-service";
import {MapPinIcon, NoSymbolIcon} from '@heroicons/react/24/outline'
import LocationImage from "../../components/location-image";

const locationService = new LocationService()

export async function getStaticPaths(context: any) {

    const locations = await locationService.getLocationsNear("43201")

    const paths = locations.map((location: Location) => {
        return {
            params: {
                id: location.id
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {

    const locations = await locationService.getLocationsNear("43201")

    return {
        props: {
            location: locations.find((location: Location) => context.params.id === location.id)
        },
    }
}

export default function BrewPub(props: GetStaticProps<any>) {

    const location: Location = (props as any).location

    return (

        <>

            <Head>
                <title>{`Local Beer - ${location.name.toString()}`}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen mx-auto max-w-5xl md:p-4"}>

                <div className={"md:flex md:flex-row md:gap-x-4"}>

                    <div className={"flex-1"}>

                        <LocationImage image={location.image} width={1500} height={400}/>

                        <div className={"p-4"}>

                            <h1 className={"text-3xl mb-2"}>
                                {location.name}
                            </h1>

                            <div className={"flex flex-row gap-x-2 mb-4"}>
                                <MapPinIcon width={24} height={24}/>
                                <p>{location.address}</p>
                            </div>

                            <p className={"leading-relaxed mb-4"}>
                                {location.description}
                            </p>

                        </div>

                    </div>

                </div>

            </main>

        </>

    )

}
