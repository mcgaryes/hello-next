import fooBarService from "@/services/foo-bar/foo-bar-service";
import axios from "axios";

import MockAdapter from 'axios-mock-adapter';

describe("foo-bar service", () => {

    let mock: MockAdapter
    let url: RegExp

    beforeAll(() => {
        mock = new MockAdapter(axios);
        url = new RegExp(`http://example.com`);
    })

    test("example test case", async () => {

        const data = {status: "ok"};
        mock.onGet(url).reply(200, data);

        let result = await fooBarService.get()

        expect(result.status).toEqual("ok");

    })


})
