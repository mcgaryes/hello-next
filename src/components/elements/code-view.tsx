import {HTMLAttributes} from "react";

interface CodeViewProps extends HTMLAttributes<any> {
    value: object
}

export default function CodeView(props: CodeViewProps) {

    return (
        <div className={"overflow-scroll rounded-2xl border-gray-200 border bg-gray-50 p-8 text-sm"}>
            <pre>
                {JSON.stringify(props.value, null, 2)}
            </pre>
        </div>
    )

}

