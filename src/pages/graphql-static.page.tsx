import gql from "graphql-tag";
import client from "../apollo-client"
import {InferGetStaticPropsType} from "next";

export async function getStaticProps() {

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

    return {
        props: {
            countries: data.countries.slice(0, 4),
        },
    };

}

function GraphQlStatic(staticProps: InferGetStaticPropsType<typeof getStaticProps>) {

    const {countries} = staticProps;

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

export default GraphQlStatic;