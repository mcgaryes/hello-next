import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ClientOnly from "@/elements/client-only/client-only";

export default {
    title: "elements/ClientOnly",
    component: ClientOnly,
} as ComponentMeta<typeof ClientOnly>;

const Template: ComponentStory<typeof ClientOnly> = (args) => <ClientOnly {...args} />;

export const Default = Template.bind({});

Default.args = {
};
