import {render} from '@testing-library/react'
import {Tab} from "@headlessui/react";
import SimpleTab from "@/elements/simple-tab/simple-tab";

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
