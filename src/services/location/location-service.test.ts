import locationService from "@/services/location/location-service";
import axios from "axios";

import MockAdapter from 'axios-mock-adapter';

describe("location service", () => {

    let mock: MockAdapter
    let url: RegExp

    beforeAll(() => {
        mock = new MockAdapter(axios);
        url = new RegExp(`./*`);
    })

    test("handles empty responses", async () => {

        const data = {results: []};
        const url = new RegExp(`./*`);

        mock.onGet(url).reply(200, data);

        let locations = await locationService.getLocationsNear("0,0")

        expect(locations.length).toEqual(0);

    })

    test("handles empty location object", async () => {

        const data = {results: [{}]}; // empty location object
        mock.onGet(url).reply(200, data);

        let locations = await locationService.getLocationsNear("0,0")
        let location = locations[0];

        expect(location.id).toEqual("");
        expect(location.images[0]).toEqual("/images/location-fallback.jpg")
        expect(location.rating).toEqual(0);
        expect(location.name).toEqual("");
        expect(location.city).toEqual("");
        expect(location.address).toEqual("");
        expect(location.website).toEqual("");
        expect(location.description).toEqual("No description.");

    })

    test("handles location object", async () => {

        const given = {
            fsq_id: '4b0aea43f964a520f32923e3',
            description: "At BJ's Restaurant & Brewhouse, we've been serving up a one-of-a-kind Brewhouse experience for over forty years. We pride ourselves in our craft and attention to detail",
            location: {
                address: '1414 Polaris Pkwy',
                census_block: '390410124003039',
                country: 'US',
                cross_street: '',
                dma: 'Columbus, Oh',
                formatted_address: '1414 Polaris Pkwy, Columbus, OH 43240',
                locality: 'Columbus',
                postcode: '43240',
                region: 'OH'
            },
            name: "BJ's Restaurant & Brewhouse",
            photos: [
                {
                    id: '504a5943e4b072019590fb10',
                    created_at: '2012-09-07T20:29:55.000Z',
                    prefix: 'https://fastly.4sqi.net/img/general/',
                    suffix: '/0-OWYvk4MKroP1KyBJXJXFsuDJJ7Nrrb8s85liuhS5w.jpg',
                    width: 540,
                    height: 720,
                }
            ],
            rating: 8.6,
            website: 'https://www.bjsrestaurants.com/'
        }

        const data = {results: [given]}; // empty location object
        mock.onGet(url).reply(200, data);

        let locations = await locationService.getLocationsNear("0,0")
        let location = locations[0];

        expect(location).toBeDefined();
        expect(location.id).toEqual(given.fsq_id);
        expect(location.images[0]).toEqual("https://fastly.4sqi.net/img/general/540x720/0-OWYvk4MKroP1KyBJXJXFsuDJJ7Nrrb8s85liuhS5w.jpg")
        expect(location.rating).toEqual(4);
        expect(location.name).toEqual(given.name);
        expect(location.city).toEqual(given.location.dma);
        expect(location.address).toEqual(given.location.formatted_address);
        expect(location.website).toEqual(given.website);
        expect(location.description).toEqual(given.description);

    })

})
