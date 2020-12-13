import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RoleList, { RoleListProps } from './RoleList';

export default {
  title: 'Components/RoleList',
  component: RoleList,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<RoleListProps> = (args) => <RoleList {...args} />;

export const List = Template.bind({});
List.args = {
  onChange: action('onChange'),
};
