---
to: src/services/<%= name %>/<%= name %>-service.test.ts
---

import <%= h.changeCase.camel(name, false) %>Service from "@/services/<%= name %>/<%= name %>-service";
import axios from "axios";

import MockAdapter from 'axios-mock-adapter';

describe("<%= h.inflection.humanize(name, true) %> service", () => {

    let mock: MockAdapter
    let url: RegExp

    beforeAll(() => {
        mock = new MockAdapter(axios);
        url = new RegExp(`http://example.com`);
    })

    test("example test case", async () => {

        const data = {status: "ok"};
        mock.onGet(url).reply(200, data);

        let result = await <%= h.changeCase.camel(name, false) %>Service.get()

        expect(result.status).toEqual("ok");

    })


})
