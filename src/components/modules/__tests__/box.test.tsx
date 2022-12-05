import {render} from '@testing-library/react'
import Box from "@/modules/box";

test('Renders box unchanged', () => {
    const {container} = render(<Box />)
    expect(container).toMatchSnapshot()
})
