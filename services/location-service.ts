import {Location} from "../models/location";
import axios from "axios";

export class LocationService {

    constructor(private secret = process.env.FOUR_SQUARE_SECRET) {
    }

    async getLocationsNear(currentLocation: string = "43201"): Promise<Location[]> {

        const fields = ["fsq_id", "name", "description", "location", "rating", "photos", "website"]

        let axiosResponse = await axios.get(
            `https://api.foursquare.com/v3/places/search?query=brewery&fields=${fields.join(",")}&near=${currentLocation}`,
            {
                headers: {
                    "Authorization": this.secret,
                    "accept": "application/json"
                }
            }
        )

        return axiosResponse.data.results.map((result: any) => {

            const images: string[] = result.photos.map((photo: any) => {
                let prefix = photo.prefix
                let suffix = photo.suffix
                let size = `${photo.width}x${photo.height}`
                return `${prefix}${size}${suffix}`
            })

            /*
            {
              address: '1550 N High St',
              census_block: '390490017001003',
              country: 'US',
              cross_street: '11th Ave.',
              dma: 'Columbus, Oh',
              formatted_address: '1550 N High St (11th Ave.), Columbus, OH 43201',
              locality: 'Columbus',
              neighborhood: [ 'Short North' ],
              postcode: '43201',
              region: 'OH'
            }

             */


            return {
                id: result.fsq_id,
                website: result.website ?? "",
                name: result.name,
                images,
                description: result.description ?? "No description.",
                rating: Math.round((result.rating ?? 0) / 2),
                address: result.location.formatted_address
            } as Location

        })

    }

}
