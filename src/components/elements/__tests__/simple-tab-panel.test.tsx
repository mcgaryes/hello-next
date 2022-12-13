import {render} from '@testing-library/react'
import SimpleTabPanel from "@/elements/simple-tab-panel";

test('Renders simple-tab-panel unchanged', () => {
    const {container} = render(<SimpleTabPanel />)
    expect(container).toMatchSnapshot()
})
