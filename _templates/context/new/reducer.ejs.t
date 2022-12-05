---
to: src/context/<%= name %>/<%= name %>-reducer.ts
---

import {<%= h.changeCase.pascal(name) %>Action, <%= h.changeCase.pascal(name) %>ActionType} from "@/context/<%= name %>/<%= name %>-actions";
import {<%= h.changeCase.pascal(name) %>State} from "@/context/<%= name %>/<%= name %>-state";

export function <%= h.changeCase.camel(name) %>Reducer(state: <%= h.changeCase.pascal(name) %>State, action: <%= h.changeCase.pascal(name) %>Action): <%= h.changeCase.pascal(name) %>State {

    switch (action.type) {
        case <%= h.changeCase.pascal(name) %>ActionType.setFlag:
            return {...state, flag: true}
        default:
            return state
    }

}
