---
to: src/context/<%= name %>/<%= name %>-state.ts
---

export interface <%= h.changeCase.pascal(name) %>State {
    flag: boolean
}

export const initial<%= h.changeCase.pascal(name) %>State: <%= h.changeCase.pascal(name) %>State = {
    flag: true
}
