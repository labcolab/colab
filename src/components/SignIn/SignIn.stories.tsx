// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import SignIn from './SignIn';

export default {
  title: 'Components/SignIn',
  component: SignIn,
} as Meta;

const Template: Story = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
Default.args = {};
