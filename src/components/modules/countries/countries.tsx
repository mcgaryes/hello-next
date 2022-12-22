import {HTMLAttributes} from "react";
import {useQuery} from "@apollo/client";
import gql from "graphql-tag";

interface CountriesProps extends HTMLAttributes<any> {
}

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function Countries(props: CountriesProps) {

    const {data, loading, error} = useQuery(QUERY);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.error(error);
        return null;
    }

    const countries = data.countries.slice(0, 4);

    return (
        <div>
            {countries.map((country: any) => (
                <div key={country.code}>
                    {JSON.stringify(country)}
                </div>
            ))}
        </div>
    );

}

