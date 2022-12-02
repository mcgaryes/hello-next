import {useReducer, useState} from "react";
import {AppActionType, appReducer} from "../reducers/app-reducer";

const useTrackLocation = () => {

    const [locationErrorMsg, setLocationErrorMsg] = useState("");
    // const [state, dispatch] = useReducer(appReducer, {latLong: "", locations: []})

    const success = (position: GeolocationPosition) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // dispatch({
        //     type: AppActionType.SET_LAT_LONG,
        //     payload: `${latitude},${longitude}`
        // });

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
        latLong: "", // state.latLong,
        handleTrackLocation,
        locationErrorMsg,
    };
};

export default useTrackLocation;
