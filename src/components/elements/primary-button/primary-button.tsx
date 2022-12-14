import {HTMLAttributes} from "react";

interface PrimaryButtonProps extends HTMLAttributes<any> {
}

export default function PrimaryButton(props: PrimaryButtonProps) {

    return (
        <div className={props.className}>
            <button onClick={props.onClick} className={"bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 active:bg-blue-800"}>
                {props.children}
            </button>
        </div>
    )

}

