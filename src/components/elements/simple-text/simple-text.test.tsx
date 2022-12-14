import {render} from '@testing-library/react'
import SimpleText from "@/elements/simple-text/simple-text";

test('Renders simple-text unchanged', () => {
    const {container} = render(<SimpleText />)
    expect(container).toMatchSnapshot()
})
