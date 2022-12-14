import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import FooBar from "@/elements/foo-bar/foo-bar";

export default {
    title: "elements/FooBar",
    component: FooBar,
} as ComponentMeta<typeof FooBar>;

const Template: ComponentStory<typeof FooBar> = (args) => <FooBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: "FooBar"
};
