import React from 'react';

import type { Story, Meta } from '@storybook/react';

import SearchBar, { SearchBarProps } from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const ABC = Template.bind({});
ABC.args = {
  user: 'Hello',
  power: 3,
};

export const XYZ = Template.bind({});
XYZ.args = {};
