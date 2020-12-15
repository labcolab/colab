import React from 'react';
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';

export interface RoleTagProps {
  id: string;
  role: string;
  color: string;
  icon: React.ElementType;
  selected?: boolean;
  onClick?: (id: string) => void;
  className: string;
}

const RoleTag = ({
  role,
  color,
  icon,
  id,
  selected,
  onClick,
  className,
}: RoleTagProps) => (
  <Tag
    size="sm"
    variant="subtle"
    colorScheme={selected || !onClick ? color : 'white'}
    onClick={onClick ? () => onClick(id) : undefined}
    role={onClick ? 'button' : undefined}
    className={className}
  >
    <TagLeftIcon as={icon} />
    <TagLabel>{role}</TagLabel>
  </Tag>
);

export default RoleTag;
