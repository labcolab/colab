import React from 'react';

import type { Story, Meta } from '@storybook/react';

import NavBar, { NavBarProps } from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: 'Hello',
  power: 3,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
