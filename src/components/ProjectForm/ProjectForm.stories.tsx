/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import ProjectForm from './ProjectForm';

export default {
  title: 'Components/ProjectForm',
  component: ProjectForm,
} as Meta;

const Template: Story = (args) => <ProjectForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
