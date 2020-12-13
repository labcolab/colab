import React, { useState } from 'react';
import { TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { StyledTag } from './RoleTag.styles';

export interface RoleTagProps {
  role: string;
  color: string;
  icon: React.ElementType;
  clickable: boolean;
  onAdd?: (role: string) => void;
  onRemove?: (role: string) => void;
}

const colorBeforeClick = 'grey';

const RoleTag = ({
  role,
  color,
  icon,
  clickable,
  onAdd,
  onRemove,
}: RoleTagProps) => {
  const defaultColor = clickable ? colorBeforeClick : color;
  const [tagColor, setTagColor] = useState<string>(defaultColor);

  const onChoose = () => {
    if (tagColor === color) {
      setTagColor(colorBeforeClick);
      if (onRemove) onRemove(role);
    } else {
      setTagColor(color);
      if (onAdd) onAdd(role);
    }
  };

  return (
    <StyledTag
      size="sm"
      variant="subtle"
      colorScheme={tagColor}
      role="button"
      onClick={clickable ? onChoose : undefined}
    >
      <TagLeftIcon boxSize="12px" as={icon} />
      <TagLabel>{role}</TagLabel>
    </StyledTag>
  );
};

export default RoleTag;
