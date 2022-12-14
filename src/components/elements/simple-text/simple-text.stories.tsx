import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import SimpleText from "@/elements/simple-text/simple-text";

export default {
    title: "elements/SimpleText",
    component: SimpleText,
} as ComponentMeta<typeof SimpleText>;

const Template: ComponentStory<typeof SimpleText> = (args) => <SimpleText {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: "SimpleText"
};
