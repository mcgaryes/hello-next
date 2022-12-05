---
to: src/context/<%= name %>/<%= name %>-actions.ts
---

export enum <%= h.changeCase.pascal(name) %>ActionType {
    setFlag,
}

export interface <%= h.changeCase.pascal(name) %>Action {
    type: <%= h.changeCase.pascal(name) %>ActionType
    payload?: any
}
