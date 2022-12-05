---
to: src/context/<%= name %>/<%= name %>-provider.tsx
---

import {ReactNode, useReducer} from "react";
import {<%= h.changeCase.camel(name) %>Reducer} from "@/context/<%= name %>/<%= name %>-reducer";
import {<%= h.changeCase.pascal(name) %>Context} from "@/context/<%= name %>/<%= name %>-context";
import {initial<%= h.changeCase.pascal(name) %>State} from "@/context/<%= name %>/<%= name %>-state";

interface <%= h.changeCase.pascal(name) %>ProviderProps {
    children: ReactNode | ReactNode[]
}

export function <%= h.changeCase.pascal(name) %>Provider(props: <%= h.changeCase.pascal(name) %>ProviderProps) {

    const [state, dispatch] = useReducer(<%= h.changeCase.camel(name) %>Reducer, initial<%= h.changeCase.pascal(name) %>State)

    return (
        <<%= h.changeCase.pascal(name) %>Context.Provider value={{state, dispatch}}>
            {props.children}
        </<%= h.changeCase.pascal(name) %>Context.Provider>
    )

}
