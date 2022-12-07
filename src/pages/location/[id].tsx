import {useRouter} from "next/router";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Location, locationFactory} from "@/types/location";
import Head from "next/head";
import {MapPinIcon} from '@heroicons/react/24/outline'
import {useContext, useEffect, useState} from "react";
import {LocationContext} from "@/context/location/location-context";
import Image from "next/image"
import {getLocationsNear} from "@/services/location/location-service";

export async function getStaticPaths() {

    let locations = await getLocationsNear();

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

    let locations = await getLocationsNear();
    const location = locations.find((location: Location) => context.params.id === location.id)

    return {
        props: {
            location: location ?? locationFactory()
        }
    }

}

export default function BrewPub(initialProps: InferGetStaticPropsType<any>) {

    const router = useRouter()
    const locationId = router.query.id
    const locationContext = useContext(LocationContext);
    const [currentImage, setCurrentImage] = useState<string>("")

    const [location, setLocation] = useState<Location>(initialProps.location ?? locationFactory())

    useEffect(() => {
        setCurrentImage(location?.images[0] ?? "")
    }, [location])

    useEffect(() => {

        let loc = locationContext.state.locations.find(item => item.id === locationId);

        if (loc !== undefined) {
            setLocation(loc)
        }

    }, [locationContext, locationId])

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (

        <>

            <Head>
                <title>{`Local Beer - ${location?.name.toString()}`}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen mx-auto max-w-5xl md:p-4"}>

                <div className={"md:flex md:flex-row md:gap-x-4"}>

                    <div className={"md:flex-1 lg:flex-2"}>

                        <Image src={currentImage}
                               width={500}
                               height={500}
                               alt="Picture of the author"
                               placeholder={"blur"}
                               blurDataURL={"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="}
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

                                        <Image key={`image-${index}`}
                                               width={500}
                                               height={500}
                                               src={image}
                                               alt={""}
                                               placeholder={"blur"}
                                               blurDataURL={"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="}
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
