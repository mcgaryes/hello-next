import axios from "axios";

export class FooBarService {

    async get(): Promise<any> {

        let response = await axios.get("http://example.com", {
            headers: {
                "accept": "application/json"
            }
        })

        return response.data;

    }

}

export default new FooBarService()
