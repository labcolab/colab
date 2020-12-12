import React from 'react';
import { TagLabel, TagLeftIcon, TagRightIcon } from '@chakra-ui/react';
import { StyledTag } from './RoleTag.styles';
import cross from '../../assets/icons/cross.svg';

export interface RoleTagProps {
  role: string;
  color: string;
  icon: string;
  onDelete?: (role: string) => void;
}

interface RoleIconProps {
  icon: string;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

const RoleIcon = ({ icon, onClick }: RoleIconProps) => (
  <img
    src={icon}
    alt={icon}
    onClick={onClick}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role="button"
    tabIndex={0}
    onKeyDown={onClick}
  />
);

// eslint-disable-next-line object-curly-newline
const RoleTag = ({ role, color, icon, onDelete }: RoleTagProps) => {
  const Icon = () => <RoleIcon icon={icon} />;
  const CrossIcon = () => (
    <RoleIcon
      icon={cross}
      onClick={onDelete ? () => onDelete(role) : undefined}
    />
  );

  console.log(onDelete);
  return (
    <StyledTag size="sm" variant="subtle" colorScheme={color}>
      <TagLeftIcon boxSize="12px" as={Icon} />
      <TagLabel>{role}</TagLabel>
      {onDelete ? <TagRightIcon boxSize="12px" as={CrossIcon} /> : null}
    </StyledTag>
  );
};

export default RoleTag;
