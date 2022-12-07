import {render} from '@testing-library/react'
import PrimaryButton from "@/elements/primary-button";

test('Renders primary-button unchanged', () => {
    const {container} = render(<PrimaryButton />)
    expect(container).toMatchSnapshot()
})
