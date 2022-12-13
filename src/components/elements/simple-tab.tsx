import {Fragment, HTMLAttributes} from "react";
import classNames from "classnames";
import {Tab} from "@headlessui/react";

interface SimpleTabProps extends HTMLAttributes<any> {
}

export default function SimpleTab(props: SimpleTabProps) {

    return (
        <Tab as={Fragment}>
            {({selected}) => (

                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                    className={
                        classNames(
                            selected ? 'bg-blue-500 text-white' : 'bg-blue-200 text-black',
                            "first:rounded-l-lg last:rounded-r-lg flex-grow h-8",
                            "border-r-2 last:border-none last:rounded-r-lg flex-grow h-8"
                        )
                    }
                >
                    Tab 1
                </button>

            )}
        </Tab>
    )

}

