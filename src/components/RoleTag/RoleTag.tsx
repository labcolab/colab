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
    variant="subtle"
    colorScheme={selected || !onClick ? color : 'white'}
    onClick={onClick && (() => onClick(id))}
    role={onClick && 'button'}
    {...otherProps}
  >
    <TagLeftIcon as={icon} />
    <TagLabel>{role}</TagLabel>
  </Tag>
);

export default RoleTag;
