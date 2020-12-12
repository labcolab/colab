/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import RoleTag, { RoleTagProps } from './RoleTag';
import roles from './roles';

export default {
  component: RoleTag,
  title: 'Components/RoleTag',
} as Meta;

// template to be used by each story
const Template: Story<RoleTagProps> = (args) => (
  <div>
    <RoleTag {...args} onDelete={undefined} />
    <br />
    <RoleTag {...args} />
  </div>
);

// story
export const FrontendDeveloper = Template.bind({});
FrontendDeveloper.args = roles.frontend;

export const BackendDeveloper = Template.bind({});
BackendDeveloper.args = roles.backend;

export const FullStackDeveloper = Template.bind({});
FullStackDeveloper.args = roles.fullstack;

export const Designer = Template.bind({});
Designer.args = roles.designer;

export const ProjectManager = Template.bind({});
ProjectManager.args = roles.projectManager;

export const InfoSecDeveloper = Template.bind({});
InfoSecDeveloper.args = roles.infosec;

export const iOSDeveloper = Template.bind({});
iOSDeveloper.args = roles.ios;

export const AndroidDeveloper = Template.bind({});
AndroidDeveloper.args = roles.android;
