import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Post, { PostProps } from './Post';
import type { PostType } from '../../services/database/database';

export default {
  title: 'Components/Post',
  component: Post,
} as Meta;

const Template: Story<PostProps> = (args) => <Post {...args} />;

const post: PostType = {
  title: 'test post',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown' +
    ' printer took a galley of type and scrambled it to make a type specimen book. It has survived ' +
    'not only five centuries, but also the leap into electronic typesetting, remaining essentially' +
    ' unchanged. It was popularised in the 1960s with the release of Letraset sheets containinge',
  roles: ['frontend', 'designer', 'backend'],
  images: ['https://firebasestorage.googleapis.com/v0/b/colab-dff8b.appspot.com/o/8fade9ad-47da-4fb8-a425-f26bd0c13694.png?alt=media&token=cb9b2ffd-e85e-4f29-a824-2bc93ada6603',
    'https://firebasestorage.googleapis.com/v0/b/colab-dff8b.appspot.com/o/8fade9ad-47da-4fb8-a425-f26bd0c13694.png?alt=media&token=cb9b2ffd-e85e-4f29-a824-2bc93ada6603'],
  ownerId: 'xyz',
  createdAt: 1620598183970,
};

export const Default = Template.bind({});
Default.args = {
  post,
  postId: 'E7j4gs0WHI4d7QKrYl52',
  currentUid: 'abc',
};
