import React from 'react';
import type { Story, Meta } from '@storybook/react';
import UserMenu, { UserMenuProps } from './UserMenu';

export default {
  title: 'Components/UserMenu',
  component: UserMenu,
} as Meta;

const Template: Story<UserMenuProps> = (args) => <UserMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Dan Abrahmov',
  avatar: 'https://bit.ly/dan-abramov',
};
