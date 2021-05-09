/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import CategoryCard, { CategoryCardProps } from './CategoryCard';

export default {
  title: 'Components/CategoryCard',
  component: CategoryCard,
} as Meta;

const Template: Story<CategoryCardProps> = (args) => <CategoryCard {...args} />;

export const DummyCategoryCard = Template.bind({});
DummyCategoryCard.args = {
  categoryName: 'dummy category',
  categoryPicPath: 'https://bit.ly/2Z4KKcF',
};
