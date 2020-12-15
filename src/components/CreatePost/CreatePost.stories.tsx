// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import CreatePost from './CreatePost';

export default {
  title: 'Components/CreatePost',
  component: CreatePost,
} as Meta;

const Template: Story = (args) => <CreatePost {...args} />;

export const Default = Template.bind({});
Default.args = {};
