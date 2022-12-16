import Home from "@/pages/index.page";
import {locationFactory} from "@/types/location";

export default {
    title: "Pages/Home",
    component: Home,
};

export const HomePage = () => <Home staticProps={{
    props: {
        locations: [locationFactory()]
    }
}}/>
