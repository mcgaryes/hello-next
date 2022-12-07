import {Location} from "@/types/location";

export interface LocationState {
    locations: Location[]
    latLong: string
}

export const initialLocationState: LocationState = {
    locations: [],
    latLong: ""
}
