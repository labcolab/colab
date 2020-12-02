/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';

import ProjectBox, { ProjectBoxProps } from './ProjectBox';

export default {
  title: 'Components/ProjectBox',
  component: ProjectBox,
} as Meta;

const Template: Story<ProjectBoxProps> = (args) => <ProjectBox {...args} />;

export const LargeProjectBox = Template.bind({});
LargeProjectBox.args = {
  avatar: 'avatar',
  name: 'name',
  date: 'date',
};

// export const SmallProjectBox = Template.bind({});
// ControlledWithText.args = {
//   ...ControlledWithoutText.args,
//   value: 'Hello',
// };
