/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import logo from '../../assets/logo.svg';
import Post, { PostProps } from './Post';

export default {
  title: 'Components/Post',
  component: Post,
} as Meta;

const Template: Story<PostProps> = (args) => <Post {...args} />;

export const SmallPost = Template.bind({});
SmallPost.args = {
  avatar: 'https://bit.ly/dan-abramov',
  name: 'Dan Abramov',
  date: '02:08 am',
  description: "This is an amazing project. You'd love to work for us.",
  roleIds: ['frontend', 'backend', 'designer'],
};

export const LargePost = Template.bind({});
LargePost.args = {
  name: 'Harkunwar Kochar',
  date: '12:30 pm',
  description: 'We need to design something for our cool project here.',
  roleIds: ['backend', 'fullstack', 'designer'],
  images: [logo, logo, logo],
};
