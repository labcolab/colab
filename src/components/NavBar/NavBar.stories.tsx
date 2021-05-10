import React from 'react';
import type { Story, Meta } from '@storybook/react';
import NavBar, { NavBarProps } from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  test: true,
  testUid: '4ztp7CuLJ0b2iUMBQVMA6o81fAj1',
};
