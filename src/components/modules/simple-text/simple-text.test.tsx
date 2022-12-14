import {render} from '@testing-library/react'
import SimpleText from "@/modules/simple-text/simple-text";

test('Renders simple-text unchanged', () => {
    const {container} = render(<SimpleText value={"SimpleText"}/>)
    expect(container).toMatchSnapshot()
})
