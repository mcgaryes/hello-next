import {HTMLAttributes} from "react";

interface SimpleTextProps extends HTMLAttributes<any> {
    value: string
}

export default function SimpleText(props: SimpleTextProps) {

    return (
        <div className={props.className}>
            {props.value}
        </div>
    )

}

