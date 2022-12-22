import {render} from '@testing-library/react'
import Countries from "@/modules/countries/countries";

test('Renders countries unchanged', () => {
    const {container} = render(<Countries value={"Countries"}/>)
    expect(container).toMatchSnapshot()
})
