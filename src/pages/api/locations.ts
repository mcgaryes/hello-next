import type {NextApiRequest, NextApiResponse} from 'next'
import {LocationService} from "../../services/location-service";
import {Location} from "../../models/location";

const locationService = new LocationService()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Location[]>
) {

    let latLong = req.query.ll as string;

    let locations = await locationService.getLocationsNear(latLong);

    res.status(200).send(locations)

}
