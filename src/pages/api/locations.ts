import type {NextApiRequest, NextApiResponse} from 'next'
import {Location} from "@/types/location";
import {getLocationsNear} from "@/services/location/location-service";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Location[]>
) {

    let query: string = req.query?.ll as string;
    let locations = await getLocationsNear(query)

    res.status(200).send(locations)

}
