import React from 'react';
import roles from '../RoleTag/roles';
import RoleTag from '../RoleTag/RoleTag';
import { StyledContainer } from './RoleList.styles';

export interface RoleListProps {
  onAdd?: (role: string) => void;
  onRemove?: (role: string) => void;
}

const RoleList = ({ onAdd, onRemove }: RoleListProps) => {
  const keys = Object.keys(roles);
  return (
    <StyledContainer>
      {keys.map((key) => (
        <RoleTag
          role={roles[key].role}
          color={roles[key].color}
          icon={roles[key].icon}
          clickable
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </StyledContainer>
  );
};

export default RoleList;
