import {render} from '@testing-library/react'
import ClientOnly from "@/elements/client-only/client-only";

test('Renders client-only unchanged', () => {
    const {container} = render(<ClientOnly><div/></ClientOnly>)
    expect(container).toMatchSnapshot()
})
