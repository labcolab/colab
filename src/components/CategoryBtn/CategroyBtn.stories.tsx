/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import CategoryBtn, { CategoryBtnProps } from './CategoryBtn';

export default {
  title: 'Components/CategoryBtn',
  component: CategoryBtn,
} as Meta;

const Template: Story<CategoryBtnProps> = (args) => <CategoryBtn {...args} />;

export const DummyCategory = Template.bind({});
DummyCategory.args = {
  categoryName: 'dummy category',
};
