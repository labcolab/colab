// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import SignUpForm from './SignUpForm';

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
} as Meta;

const Template: Story = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
