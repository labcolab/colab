import React from 'react';
import type { RolesInterface, SelectedRolesInterface } from '../RoleTag/roles';
import { StyledRoleTag, StyledContainer } from './RoleList.styles';

export interface RoleListProps {
  roles: RolesInterface;
  selectedRoles: SelectedRolesInterface;
  onSelect?: (roleId: string) => void;
  onRemove?: (roleId: string) => void;
}

const RoleList = ({
  roles,
  selectedRoles,
  onSelect,
  onRemove,
}: RoleListProps) => (
  <StyledContainer>
    {Object.values(roles).map(({ role, color, icon, id }) => (
      <StyledRoleTag
        key={id}
        id={id}
        role={role}
        color={color}
        icon={icon}
        selected={selectedRoles[id]}
        onClick={selectedRoles[id] ? onRemove : onSelect}
      />
    ))}
  </StyledContainer>
);

export default RoleList;
