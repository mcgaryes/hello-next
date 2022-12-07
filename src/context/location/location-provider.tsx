import {ReactNode, useReducer} from "react";
import {locationReducer} from "@/context/location/location-reducer";
import {LocationContext} from "@/context/location/location-context";
import {initialLocationState} from "@/context/location/location-state";

interface LocationProviderProps {
    children: ReactNode | ReactNode[]
}

export function LocationProvider(props: LocationProviderProps) {

    const [state, dispatch] = useReducer(locationReducer, initialLocationState)

    return (
        <LocationContext.Provider value={{state, dispatch}}>
            {props.children}
        </LocationContext.Provider>
    )

}
