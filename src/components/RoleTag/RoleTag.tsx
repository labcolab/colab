import React from 'react';
import { TagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react';
import { StyledTag } from './RoleTag.styles';
import cross from '../../assets/icons/CrossIcon';

export interface RoleTagProps {
  role: string;
  color: string;
  icon: React.ElementType;
  onDelete?: (role: string) => void;
}

const RoleTag = ({ role, color, icon, onDelete }: RoleTagProps) => (
  <StyledTag size="sm" variant="subtle" colorScheme={color}>
    <TagLeftIcon boxSize="12px" as={icon} />
    <TagLabel>{role}</TagLabel>
    {onDelete ? (
      <TagRightIcon
        boxSize="12px"
        as={cross}
        onClick={() => onDelete(role)}
        role="button"
        tabIndex={0}
        color="#b30f0f"
      />
    ) : null}
  </StyledTag>
);

export default RoleTag;
