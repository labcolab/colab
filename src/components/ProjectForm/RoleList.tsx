import React from 'react';
import {
  HStack,
  VStack,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import roles from '../RoleTag/roles';
import RoleTag from '../RoleTag/RoleTag';
import { StyledNumberInput } from './RoleList.styles';

export interface RoleListProps {
  onChange: (role: string, value: number) => void;
}

const RoleList = ({ onChange }: RoleListProps) => {
  const keys = Object.keys(roles);

  return (
    <VStack spacing={4}>
      {keys.map((key) => (
        <HStack spacing="24 px">
          <RoleTag
            role={roles[key].role}
            color={roles[key].color}
            icon={roles[key].icon}
          />
          <StyledNumberInput
            id={roles[key].role}
            size="sm"
            defaultValue={0}
            min={0}
            onChange={(_, val) => onChange(roles[key].role, val)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </StyledNumberInput>
        </HStack>
      ))}
    </VStack>
  );
};

export default RoleList;
