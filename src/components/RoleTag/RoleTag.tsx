import React from 'react';
import { TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { StyledTag } from './RoleTag.styles';

export interface RoleTagProps {
  id: string;
  role: string;
  color: string;
  icon: React.ElementType;
  selected?: boolean;
  onClick?: (id: string) => void;
}

const RoleTag = ({
  role,
  color,
  icon,
  id,
  selected,
  onClick,
}: RoleTagProps) => (
  <StyledTag
    size="sm"
    variant="subtle"
    colorScheme={selected || !onClick ? color : 'white'}
    onClick={onClick ? () => onClick(id) : undefined}
    role={onClick ? 'button' : undefined}
  >
    <TagLeftIcon as={icon} />
    <TagLabel>{role}</TagLabel>
  </StyledTag>
);

export default RoleTag;
