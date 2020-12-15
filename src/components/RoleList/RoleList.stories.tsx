import React, { useState } from 'react';
import type { Story, Meta } from '@storybook/react';
import RoleList, { RoleListProps } from './RoleList';
import roles from '../RoleTag/roles';

export default {
  title: 'Components/RoleList',
  component: RoleList,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<RoleListProps> = (args) => {
  const [selectedRoles, setSelectedRoles] = useState({});

  const handleRoleSelected = (roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: true,
    }));
  };

  const handleRoleRemoved = (roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: false,
    }));
  };

  return (
    <RoleList
      {...args}
      onSelect={handleRoleSelected}
      onRemove={handleRoleRemoved}
      selectedRoles={selectedRoles}
    />
  );
};

export const List = Template.bind({});
List.args = {
  roles,
};
