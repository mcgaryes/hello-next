import {Location} from "@/types/location";
import axios from "axios";

export async function getLocationsNear(currentLocation: string = "40.367474,-82.996216"): Promise<Location[]> {

    const fields = ["fsq_id", "name", "description", "location", "rating", "photos", "website"]

    let axiosResponse = await axios.get(
        `https://api.foursquare.com/v3/places/search?query=brewery&fields=${fields.join(",")}&ll=${currentLocation}`,
        {
            headers: {
                "Authorization": process.env.FOUR_SQUARE_SECRET,
                "accept": "application/json"
            }
        }
    )

    return axiosResponse.data.results.map((result: any) => {

        let images: string[] = result.photos?.map((photo: any) => {
            let prefix = photo.prefix
            let suffix = photo.suffix
            let size = `${photo.width}x${photo.height}`
            return `${prefix}${size}${suffix}`
        }) ?? []

        if (images.length <= 0) {
            images = ["/images/location-fallback.jpg"]
        }

        return {
            id: result.fsq_id ?? "",
            website: result.website ?? "",
            name: result.name ?? "",
            images,
            description: result.description ?? "No description.",
            rating: Math.round((result.rating ?? 0) / 2),
            address: result.location?.formatted_address ?? "",
            city: result.location?.dma ?? ""
        } as Location

    })

}
