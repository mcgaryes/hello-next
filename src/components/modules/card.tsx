import Link from "next/link";

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

            <img src={props.image ?? ""}
                 alt={props.title}
                 className={"rounded-lg w-full aspect-video object-cover object-left-top"}/>

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
