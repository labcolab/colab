import React from 'react';
import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react';

export interface RoleTagProps extends Omit<TagProps, 'onClick'> {
  id: string;
  role: string;
  color: string;
  icon: React.ElementType;
  selected?: boolean;
  onClick?: (id: string) => void;
}

const RoleTag = ({
  id,
  role,
  color,
  icon,
  selected,
  onClick,
  ...otherProps
}: RoleTagProps) => (
  <Tag
    size="sm"
    borderRadius="full"
    variant={selected || !onClick ? 'subtle' : 'outline'}
    colorScheme={selected || !onClick ? color : 'gray'}
    onClick={onClick ? () => onClick(id) : undefined}
    role={onClick ? 'button' : undefined}
    {...otherProps}
  >
    <TagLeftIcon as={icon} />
    <TagLabel fontSize="12px">{role}</TagLabel>
  </Tag>
);

export default RoleTag;
