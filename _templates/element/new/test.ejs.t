---
to: src/components/elements/<%= name %>/<%= name %>.test.tsx
---

import {render} from '@testing-library/react'
import <%= h.changeCase.pascal(name) %> from "@/elements/<%= name %>/<%= name %>";

test('Renders <%= h.inflection.humanize(name, true) %> unchanged', () => {
    const {container} = render(<<%= h.changeCase.pascal(name) %> />)
    expect(container).toMatchSnapshot()
})
