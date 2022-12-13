import {render} from '@testing-library/react'
import SimpleTab from "@/elements/simple-tab";
import {Tab} from "@headlessui/react";

test('Renders simple-tab unchanged', () => {
    const {container} = render(
        <Tab.Group>
            <Tab.List>
                <SimpleTab>Tab</SimpleTab>
            </Tab.List>
        </Tab.Group>
    )
    expect(container).toMatchSnapshot()
})
