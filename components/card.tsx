import Image from "next/image"
import Link from "next/link";
import {NoSymbolIcon} from "@heroicons/react/24/outline";
import LocationImage from "./location-image";

interface CardProps {

    id: string
    title: string
    image: string
    rating: number

}

export default function Card(props: CardProps) {

    return (

        <Link
            className={"relative p-4 rounded-lg bg-white border-gray-100 border-2 drop-shadow-lg z-1 flex flex-col gap-y-2"}
            href={`/location/${props.id}`}>

            <LocationImage image={props.image}
                           className={"rounded-lg"}
                           width={700}
                           height={50}/>

            <div className={"grow"}/>

            <div className={"flex flex-row justify-between"}>

                <h1 className={"text-xl"}>
                    {props.title}
                </h1>

                <div className={"text-lg flex-row"}>
                    {props.rating} / 5
                </div>

            </div>

        </Link>
    )

}
