/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar, { NavBarProps } from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = (args) => (
  <ChakraProvider>
    <NavBar {...args} />
  </ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {};
