import React from 'react';
import { Avatar, Tag, TagLabel, TagLeftIcon, HStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { StyledTag } from './RoleTag.styles';

export interface RoleTagProps {
  role: string;
  color: string;
}

const RoleTag = ({ role, color }: RoleTagProps) => (
  <StyledTag size="sm" variant="subtle" colorScheme={color}>
    <TagLeftIcon boxSize="12px" as={AddIcon} />
    <TagLabel>{role}</TagLabel>
  </StyledTag>
);

export default RoleTag;
