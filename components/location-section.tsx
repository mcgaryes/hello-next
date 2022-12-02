import {Location} from "../models/location";
import Card from "./card";
import {HTMLAttributes} from "react";

interface LocationSectionProps extends HTMLAttributes<any> {
    title: string
    locations: Location[]
}

export default function LocationSection(props: LocationSectionProps) {

    const {title, locations, className} = props;

    return (

        <div className={className}>

            <div className={"mb-5 md:px-4"}>
                <h1 className={"text-2xl flex-grow"}>{title}</h1>
            </div>

            <div className={"relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>

                {
                    locations.map(location => (

                        <Card key={location.id}
                              id={location.id}
                              rating={location.rating}
                              title={location.name}
                              image={location.images[0]}/>

                    ))
                }

            </div>

        </div>

    )

}
