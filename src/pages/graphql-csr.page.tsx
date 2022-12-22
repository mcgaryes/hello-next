import {useQuery} from "@apollo/client";
import ClientOnly from "@/elements/client-only/client-only";
import Countries from "@/modules/countries/countries";

function GraphQlCsr() {

    return (
        <div>
            <Countries/>
        </div>
    )
}

export default GraphQlCsr;