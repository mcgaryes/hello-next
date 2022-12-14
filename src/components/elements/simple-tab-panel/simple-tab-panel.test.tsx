import {render} from '@testing-library/react'
import SimpleTabPanel from "@/elements/simple-tab-panel/simple-tab-panel";
import {Tab} from "@headlessui/react";

test('Renders simple-tab-panel unchanged', () => {
    const {container} = render(
        <Tab.Group>
            <Tab.List>
                <SimpleTabPanel>Tab</SimpleTabPanel>
            </Tab.List>
        </Tab.Group>
    )
    expect(container).toMatchSnapshot()
})
