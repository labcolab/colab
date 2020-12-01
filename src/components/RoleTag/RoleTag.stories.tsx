/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

import RoleTag, { RoleTagProps } from './RoleTag';

export default {
  component: RoleTag,
  title: 'Components/RoleTag',
} as Meta;

//template to be used by each story
const Template: Story<RoleTagProps> = (args) => (
  <ChakraProvider>
    <RoleTag {...args} />
  </ChakraProvider>
);

//story
export const DummyRole = Template.bind({});
DummyRole.args = {
  role: 'dummy role',
  color: 'red',
};
