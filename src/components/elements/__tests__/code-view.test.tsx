import {render} from '@testing-library/react'
import CodeView from "@/elements/code-view";

test('Renders code-view unchanged', () => {
    const {container} = render(<CodeView />)
    expect(container).toMatchSnapshot()
})
