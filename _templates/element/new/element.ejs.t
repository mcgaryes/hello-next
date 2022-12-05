---
to: src/components/elements/<%= name %>.tsx
---

import {HTMLAttributes} from "react";

interface <%= h.changeCase.pascal(name) %>Props extends HTMLAttributes<any> {
}

export default function <%= h.changeCase.pascal(name) %>(props: <%= h.changeCase.pascal(name) %>Props) {

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )

}

