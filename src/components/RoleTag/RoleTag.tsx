import React from 'react';
import { Tag, TagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react';
import cross from '../../assets/icons/CrossIcon';

export interface RoleTagProps {
  role: string;
  color: string;
  icon: React.ElementType;
  onDelete?: (role: string) => void;
}

const RoleTag = ({ role, color, icon, onDelete }: RoleTagProps) => (
  <Tag size="sm" variant="subtle" colorScheme={color}>
    <TagLeftIcon boxSize="12px" as={icon} />
    <TagLabel>{role}</TagLabel>
    {onDelete ? (
      <TagRightIcon
        boxSize="12px"
        as={cross}
        onClick={() => onDelete(role)}
        role="button"
        tabIndex={0}
        color="white"
      />
    ) : null}
  </Tag>
);

export default RoleTag;
