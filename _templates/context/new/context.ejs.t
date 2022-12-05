---
to: src/context/<%= name %>/<%= name %>-context.ts
---

import {createContext, Dispatch} from "react";
import {<%= h.changeCase.pascal(name) %>Action} from "@/context/<%= name %>/<%= name %>-actions";
import {<%= h.changeCase.pascal(name) %>State, initial<%= h.changeCase.pascal(name) %>State} from "@/context/<%= name %>/<%= name %>-state";
import {noop} from "@/utilities/noop";

export const <%= h.changeCase.pascal(name) %>Context = createContext<{ state: <%= h.changeCase.pascal(name) %>State, dispatch: Dispatch<<%= h.changeCase.pascal(name) %>Action> }>({
    state: initial<%= h.changeCase.pascal(name) %>State,
    dispatch: noop
});
