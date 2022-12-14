import {render} from '@testing-library/react'
import CodeView from "@/elements/code/code-view";

test('Renders code-view unchanged', () => {
    const {container} = render(<CodeView value={{}}/>)
    expect(container).toMatchSnapshot()
})
