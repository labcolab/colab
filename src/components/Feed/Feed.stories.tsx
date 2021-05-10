import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Feed, { FeedProps } from './Feed';

export default {
  title: 'Components/Feed',
  component: Feed,
} as Meta;

const Template: Story<FeedProps> = (args) => <Feed {...args} />;

export const Default = Template.bind({});
Default.args = {};
