/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import type { Story, Meta } from '@storybook/react';
import * as ChakraUIIcons from '@chakra-ui/icons';
import RoleTag, { RoleTagProps } from './RoleTag';
import roles from './roles';
import * as CustomIcons from '../../assets/icons';

const supportedIcons: any = {
  ...CustomIcons,
  ...ChakraUIIcons,
};

delete supportedIcons.Icon;
delete supportedIcons.createIcon;

export default {
  component: RoleTag,
  title: 'Components/RoleTag',
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(supportedIcons),
      },
    },
  },
} as Meta;

const Template: Story<RoleTagProps> = ({
  icon,
  selected,
  ...args
}: RoleTagProps) => {
  const finalIcon = typeof icon === 'string' ? supportedIcons[icon] : icon;

  const [roleSelected, selectRole] = useState(selected);

  useEffect(() => {
    selectRole(selected);
  }, [selected]);

  const handleRoleSelected = () => {
    selectRole((value) => !value);
  };

  return (
    <RoleTag
      {...args}
      icon={finalIcon}
      selected={roleSelected}
      onClick={handleRoleSelected}
    />
  );
};

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
iOSDeveloper.storyName = 'iOS Developer';

export const AndroidDeveloper = Template.bind({});
AndroidDeveloper.args = roles.android;
