import React from 'react';
import { Avatar, Wrap, WrapItem, Box, Text, VStack } from '@chakra-ui/react';
import RoleTag, { RoleTagProps } from '../RoleTag/RoleTag';

export interface ProjectBoxProps {
  avatar: string;
  name: string;
  date: string;
  description: string;
  roles: RoleTagProps[];
  images: string[];
}

const ProjectBox = ({
  avatar,
  name,
  date,
  description,
  roles,
  images,
}: ProjectBoxProps) => {
  return (
    <Box
      w={images ? '100%' : '50%'}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <VStack spacing={2} align="left">
        <Wrap spacing={2}>
          <WrapItem>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov" //use avatar
            />
          </WrapItem>
          <WrapItem>{name}</WrapItem>
        </Wrap>
        <Text>{description}</Text>
        <Wrap spacing={3}>
          {roles.map((roletag) => (
            <WrapItem>
              <RoleTag
                role={roletag.role}
                color={roletag.color}
                key={roletag.role}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Wrap spacing={2}>
          {images &&
            images.map((image) => (
              <WrapItem>
                <img src={image} alt={image} key={image} />
              </WrapItem>
            ))}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default ProjectBox;
