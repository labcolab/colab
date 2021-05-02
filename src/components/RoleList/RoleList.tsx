import React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';
import type { RolesInterface, SelectedRolesInterface } from '../RoleTag/roles';
import RoleTag from '../RoleTag/RoleTag';

export interface RoleListProps extends Omit<BoxProps, 'onSelect'> {
  roles: RolesInterface;
  selectedRoles: SelectedRolesInterface;
  onSelect?: (roleId: string) => void;
  onRemove?: (roleId: string) => void;
  roleSize?: string;
}

const RoleList = ({
  roles,
  selectedRoles,
  onSelect,
  onRemove,
  roleSize,
  ...otherProps
}: RoleListProps) => (
  <Box {...otherProps}>
    {Object.values(roles).map(({ role, color, icon, id }) => (
      <RoleTag
        key={id}
        id={id}
        role={role}
        color={color}
        icon={icon}
        selected={selectedRoles[id]}
        onClick={selectedRoles[id] ? onRemove : onSelect}
        marginRight="12px"
        my="10px"
        size={roleSize}
      />
    ))}
  </Box>
);

export default RoleList;
