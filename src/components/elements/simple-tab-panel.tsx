import {HTMLAttributes} from "react";
import {Tab} from "@headlessui/react";

interface SimpleTabPanelProps extends HTMLAttributes<any> {
}

export default function SimpleTabPanel(props: SimpleTabPanelProps) {

    return (
        <Tab.Panel className={"flex items-center justify-center w-full bg-gray-50 h-80"}>
            {props.children}
        </Tab.Panel>
    )

}

