import React from 'react';
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

export interface ProjectBoxProps {
  avatar: string;
  name: string;
  date: string;
}

const ProjectBox = ({ avatar, name, date }: ProjectBoxProps) => {
  return (
    <Wrap>
      <WrapItem>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </WrapItem>
      <WrapItem>
        <Avatar
          size="sm"
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
        />
      </WrapItem>
    </Wrap>
  );
};

export default ProjectBox;
