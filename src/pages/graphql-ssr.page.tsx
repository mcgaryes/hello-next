import gql from "graphql-tag";
import client from "../apollo-client"
import {InferGetServerSidePropsType, InferGetStaticPropsType} from "next";
import {logger} from "@/utilities/logger";

export async function getServerSideProps() {

    const {data} = await client.query({
        query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    logger.debug(`Found ${data.countries.length} countries`);

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    };

}

function GraphQlSsr(serverSideProps: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const {countries} = serverSideProps;

    return (
        <div>
            <ul>
                {countries.map((country: any) => {
                    return (
                        <li key={country.code}>
                            {JSON.stringify(country)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GraphQlSsr;