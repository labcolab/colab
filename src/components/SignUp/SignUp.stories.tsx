// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import SignUp from './SignUp';

export default {
  title: 'Components/SignUp',
  component: SignUp,
} as Meta;

const Template: Story = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {};
