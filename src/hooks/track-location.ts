import {useContext, useReducer, useState} from "react";
import {LocationContext} from "@/context/location/location-context";
import {LocationActionType} from "@/context/location/location-actions";

const useTrackLocation = () => {

    const [locationErrorMsg, setLocationErrorMsg] = useState("");
    const {state, dispatch} = useContext(LocationContext);

    const success = (position: GeolocationPosition) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch({
            type: LocationActionType.setLatLong,
            payload: `${latitude},${longitude}`
        });

        setLocationErrorMsg("");
    };

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location");
    };

    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg("Geolocation is not supported by your browser");
        } else {
            // status.textContent = "Locating…";
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    return {
        latLong: state.latLong,
        handleTrackLocation,
        locationErrorMsg,
    };

};

export default useTrackLocation;
