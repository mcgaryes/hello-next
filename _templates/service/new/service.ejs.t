---
to: src/services/<%= name %>/<%= name %>-service.ts
---

import axios from "axios";

export async function get(): Promise<any> {

    let response = await axios.get("http://example.com", {
        headers: {
            "accept": "application/json"
        }
    })

    return response.data;

}
