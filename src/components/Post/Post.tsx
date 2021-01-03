import React from 'react';
import { Avatar, Wrap, WrapItem, Image, Text, VStack } from '@chakra-ui/react';
import Card from '../Card/Card';
import RoleTag from '../RoleTag/RoleTag';
import roles from '../RoleTag/roles';

export interface PostProps {
  avatar: string;
  name: string;
  date: string;
  description: string;
  roleIds: string[];
  images: string[];
}

const Post = ({
  avatar,
  name,
  date,
  description,
  roleIds,
  images = [],
}: PostProps) => (
  <Card>
    <VStack align="left" spacing={2}>
      <Wrap spacing={2}>
        <WrapItem>
          <Avatar size="sm" name={name} src={avatar} />
        </WrapItem>
        <WrapItem marginTop={0}>
          <VStack align="left" spacing={0}>
            <Text fontSize="sm" fontWeight="500">
              {name}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {date}
            </Text>
          </VStack>
        </WrapItem>
      </Wrap>
      <Text>{description}</Text>
      <Wrap spacing={3}>
        {roleIds.map((id) => (
          <WrapItem key={id}>
            <RoleTag {...roles[id]} />
          </WrapItem>
        ))}
      </Wrap>
      <Wrap spacing={2}>
        {images.map((image) => (
          <WrapItem key={image}>
            <Image src={image} alt={image} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  </Card>
);

export default Post;
