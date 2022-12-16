import {render} from '@testing-library/react'
import FooBar from "@/elements/foo-bar/foo-bar";

test('Renders foo-bar unchanged', () => {
    const {container} = render(<FooBar value={"foobar"}/>)
    expect(container).toMatchSnapshot()
})
