import {Location} from "../models/location";

export enum AppActionType {
    SET_LAT_LONG = "SET_LAT_LONG",
    SET_LOCATIONS = "SET_LOCATIONS"
}

export interface AppAction {
    type: AppActionType
    payload: any
}

export interface AppState {
    latLong: string
    locations: Location[]
}

export function appReducer(state: AppState, action: AppAction): AppState {

    const {type, payload} = action;
    // const [state, dispatch] = useReducer(appReducer, {latLong: "", locations: []})

    // console.log("type", type);
    // console.log("payload", payload);
    console.log(type, payload)
    switch (type) {
        case AppActionType.SET_LAT_LONG:



            return {
                ...state,
                locations: payload
            };
        case AppActionType.SET_LOCATIONS:

            return {
                ...state,
                locations: payload
            };
        default:
            return state;
    }
}
