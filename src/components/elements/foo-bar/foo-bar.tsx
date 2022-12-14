import {HTMLAttributes} from "react";

interface FooBarProps extends HTMLAttributes<any> {
    value: string
}

export default function FooBar(props: FooBarProps) {

    return (
        <div className={props.className}>
            {props.value}
        </div>
    )

}

