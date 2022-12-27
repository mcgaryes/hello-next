import gql from 'graphql-tag'
import type {GraphClient} from "@/services/graph-client";
import {Country} from "@/types/country";
import {inject, injectable} from "inversify";

@injectable()
export class CountryService {

    constructor(@inject('graphClient') private graphClient: GraphClient) {
    }

    private query = gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `;

    async getCountries(): Promise<Country[]> {
        return await this.graphClient.query(this.query);
    }

}