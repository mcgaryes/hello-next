import Image from "next/image";
import {NoSymbolIcon} from "@heroicons/react/24/outline/index";
import {HTMLAttributes} from "react";

interface LocationImageProps extends HTMLAttributes<any> {
    image?: string
    width: number
    height: number
}

export default function LocationImage(props: LocationImageProps) {

    return (
        !!props.image ?
            <Image src={props.image ?? ""}
                   alt="Picture of the author"
                   width={props.width}
                   height={props.height}
                   className={"object-fit ".concat(props.className ?? "")}/> :
            <div style={{width: "100%", height: "100%"}}
                 className={"relative bg-gray-100 ".concat(props.className ?? "")}>
                <NoSymbolIcon width={60}
                              height={60}
                              className={" text-gray-200 absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"}/>
            </div>
    )

}

