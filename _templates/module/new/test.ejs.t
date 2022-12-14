---
to: src/components/modules/<%= name %>/<%= name %>.test.tsx
---

import {render} from '@testing-library/react'
import <%= h.changeCase.pascal(name) %> from "@/modules/<%= name %>/<%= name %>";

test('Renders <%= h.inflection.humanize(name, true) %> unchanged', () => {
    const {container} = render(<<%= h.changeCase.pascal(name) %> value={"<%= h.changeCase.pascal(name) %>"}/>)
    expect(container).toMatchSnapshot()
})
