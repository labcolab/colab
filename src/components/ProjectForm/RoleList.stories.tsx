import React from 'react';
import type { Story, Meta } from '@storybook/react';
import RoleList from './RoleList';

export default {
  title: 'Components/RoleList',
  component: RoleList,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story = (args) => <RoleList {...args} />;

export const List = Template.bind({});
List.args = {};
