---
to: src/components/modules/<%= name %>/<%= name %>.stories.tsx
---

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import <%= h.changeCase.pascal(name) %> from "@/modules/<%= name %>/<%= name %>";

export default {
    title: "modules/<%= h.changeCase.pascal(name) %>",
    component: <%= h.changeCase.pascal(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: "<%= h.changeCase.pascal(name) %>"
};
