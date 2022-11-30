import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import {Location} from "../../models/location";
import Head from "next/head";
import Image from "next/image"
import {LocationService} from "../../services/location-service";
import {MapPinIcon, NoSymbolIcon} from '@heroicons/react/24/outline'
import LocationImage from "../../components/location-image";
import {useState} from "react";

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
    const [currentImage, setCurrentImage] = useState<string>(location.images[0] ?? "")

    return (

        <>

            <Head>
                <title>{`Local Beer - ${location.name.toString()}`}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen mx-auto max-w-5xl md:p-4"}>

                <div className={"md:flex md:flex-row md:gap-x-4"}>

                    <div className={"md:flex-1 lg:flex-2"}>

                        <img src={currentImage}
                             alt="Picture of the author"
                             className={"w-full aspect-video md:aspect-auto object-cover object-left-top"}/>

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

                    <div className={"flex-1"}>

                        <div className={"hidden md:grid grid-cols-3 gap-x-2 gap-y-2"}>
                            {
                                location.images.map((image: string, index: number) =>
                                    <button key={`image-${index}`}
                                            className={"bg-black"}
                                            onClick={() => setCurrentImage(image)}>

                                        <img key={`image-${index}`}
                                             src={image}
                                             alt={""}
                                             className={"align-middle"}/>

                                    </button>
                                )
                            }

                        </div>

                    </div>

                </div>


            </main>

        </>

    )

}
