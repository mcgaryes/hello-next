import {render} from '@testing-library/react'
import Modal from "@/modules/modal";

test('Renders modal unchanged', () => {
    const {container} = render(<Modal />)
    expect(container).toMatchSnapshot()
})
