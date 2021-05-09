// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import CreatePost, { CreatePostProps } from './CreatePost';

export default {
  title: 'Components/CreatePost',
  component: CreatePost,
} as Meta;

const Template: Story<CreatePostProps> = (args) => <CreatePost {...args} />;

export const Default = Template.bind({});
Default.args = {
  uid: '4ztp7CuLJ0b2iUMBQVMA6o81fAj1',
};
