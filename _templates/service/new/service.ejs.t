---
to: src/services/<%= name %>/<%= name %>-service.ts
---

import axios from "axios";

export class <%= h.changeCase.pascal(name) %>Service {

    async get(): Promise<any> {

        let response = await axios.get("http://example.com", {
            headers: {
                "accept": "application/json"
            }
        })

        return response.data;

    }

}

export default new <%= h.changeCase.pascal(name) %>Service()
