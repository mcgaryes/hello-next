import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

const CLIENT_ID = process.env.FOUR_SQUARE_CLIENT_ID;
const CLIENT_SECRET = process.env.FOUR_SQUARE_CLIENT_SECRET;

type Data = {
    name: string
}

/*
{
    "fsq_id": "506a523ae4b07f06b0d4de1f",
    "categories": [
        {
            "id": 13006,
            "name": "Beer Bar",
            "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                "suffix": ".png"
            }
        }
    ],
    "chains": [],
    "distance": 358,
    "geocodes": {
        "main": {
            "latitude": 39.988656,
            "longitude": -83.005452
        },
        "roof": {
            "latitude": 39.988656,
            "longitude": -83.005452
        }
    },
    "link": "/v3/places/506a523ae4b07f06b0d4de1f",
    "location": {
        "address": "1288 N High St",
        "census_block": "390490017003005",
        "country": "US",
        "cross_street": "at E 6th Ave",
        "dma": "Columbus, Oh",
        "formatted_address": "1288 N High St (at E 6th Ave), Columbus, OH 43201",
        "locality": "Columbus",
        "neighborhood": [
            "Short North"
        ],
        "postcode": "43201",
        "region": "OH"
    },
    "name": "North High Brewing Co Taproom & Brewery",
    "related_places": {},
    "timezone": "America/New_York"
}
 */

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    axios.get("https://api.foursquare.com/v3/places/nearby?query=brewery&near=224%20e%201st%20avenue%2C%20columbus%20oh%2043201", {
        headers: {
            "Authorization": "fsq3LfrQrXkrU7rFPyoe0zCxiwanJJwTeVYzPJvZzDdSqQs=",
            "accept": "application/json"
        }
    }).then(data => {
        res.status(200).json(data.data);
    }).catch((error: Error) => {
        res.status(400).send(error)
    })


}
