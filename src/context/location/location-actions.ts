export enum LocationActionType {
    setLatLong,
    setLocations,
}

export interface LocationAction {
    type: LocationActionType
    payload?: any
}
