import {HTMLAttributes} from "react";

interface BoxProps extends HTMLAttributes<any> {
}

export default function Box(props: BoxProps) {

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )

}

