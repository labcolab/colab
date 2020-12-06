/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar, { SearchBarProps } from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const ControlledWithoutText = Template.bind({});
ControlledWithoutText.args = {
  value: '',
  onChange: action('onChange'),
};

export const ControlledWithText = Template.bind({});
ControlledWithText.args = {
  ...ControlledWithoutText.args,
  value: 'Hello',
};
