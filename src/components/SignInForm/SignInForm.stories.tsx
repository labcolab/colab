// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import SignInForm from './SignInForm';

export default {
  title: 'Components/SignInForm',
  component: SignInForm,
} as Meta;

const Template: Story = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
