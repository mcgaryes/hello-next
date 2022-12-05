import {render} from '@testing-library/react'
import LocationImage from "@/elements/location-image";

test('renders location image unchanged', () => {
    const {container} = render(<LocationImage width={100} height={100}/>)
    expect(container).toMatchSnapshot()
})
