import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Countries from "@/modules/countries/countries";

export default {
    title: "modules/Countries",
    component: Countries,
} as ComponentMeta<typeof Countries>;

const Template: ComponentStory<typeof Countries> = (args) => <Countries {...args} />;

export const Default = Template.bind({});

Default.args = {
};
