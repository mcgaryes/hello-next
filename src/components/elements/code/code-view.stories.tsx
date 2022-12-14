import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import CodeView from "@/elements/code/code-view";

export default {
    title: "elements/CodeView",
    component: CodeView,
} as ComponentMeta<typeof CodeView>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CodeView> = (args) => <CodeView {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: {"foo": "bar"}
};
