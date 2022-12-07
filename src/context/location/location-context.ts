import {createContext, Dispatch} from "react";
import {LocationAction} from "@/context/location/location-actions";
import {LocationState, initialLocationState} from "@/context/location/location-state";
import {noop} from "@/utilities/noop";

export const LocationContext = createContext<{ state: LocationState, dispatch: Dispatch<LocationAction> }>({
    state: initialLocationState,
    dispatch: noop
});
