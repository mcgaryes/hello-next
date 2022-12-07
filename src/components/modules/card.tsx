import Link from "next/link";
import Image from "next/image";

interface CardProps {

    id: string
    title: string
    image: string
    rating: number

}

export default function Index(props: CardProps) {

    return (

        <Link
            className={"relative p-4 rounded-lg bg-white border-gray-100 border-2 drop-shadow-lg z-1 flex flex-col gap-y-2"}
            href={`/location/${props.id}`}>

            <div className={"relative rounded-lg w-full aspect-video overflow-hidden"}>
                <Image src={props.image ?? ""}
                       fill={true}
                       alt={props.title}
                       className={"object-cover object-left-top"}
                       placeholder={"blur"}
                       blurDataURL={"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="}/>
            </div>


            <div className={"grow"}/>

            <div className={"flex flex-row justify-between items-end gap-x-2"}>

                <p className={"text-xl flex-2"}>
                    {props.title}
                </p>

                <div className={"text-xl flex-shrink-0"}>
                    {props.rating} / 5
                </div>

            </div>

        </Link>
    )

}
