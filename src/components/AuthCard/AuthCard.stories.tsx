// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import AuthCard, { AuthCardProps, AuthType } from './AuthCard';

export default {
  title: 'Components/AuthCard',
  component: AuthCard,
} as Meta;

const Template: Story<AuthCardProps> = (args) => <AuthCard {...args} />;

export const SignIn = Template.bind({ });
SignIn.args = { authType: AuthType.SignIn };

export const SignUp = Template.bind({ });
SignUp.args = { authType: AuthType.SignUp };
