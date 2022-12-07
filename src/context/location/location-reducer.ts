import {LocationAction, LocationActionType} from "@/context/location/location-actions";
import {LocationState} from "@/context/location/location-state";

export function locationReducer(state: LocationState, action: LocationAction): LocationState {

    switch (action.type) {
        case LocationActionType.setLocations:
            return {...state, locations: action.payload}
        case LocationActionType.setLatLong:
            return {...state, latLong: action.payload}
        default:
            return state
    }

}
