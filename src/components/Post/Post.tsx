import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Image,
  Avatar,
  HStack,
  VStack,
  Text,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  DatabaseContext,
  PostType,
  ProfileInfoField,
} from '../../services/database/database';
import Card, { CardProps } from '../Card/Card';
import { AuthContext } from '../../services/auth/auth';
import RoleList from '../RoleList/RoleList';
import Roles, {
  RolesInterface,
  SelectedRolesInterface,
} from '../RoleTag/roles';

export interface PostProps extends CardProps {
  post: PostType;
  postId: string;
  currentUid: string;
}

const getDate = (timeStamp: number) => {
  const date = new Date(timeStamp);
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
};

const Post = ({ post, postId, currentUid, ...otherProps }: PostProps) => {
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  const { getProfileInfo } = useContext(DatabaseContext);

  const handleSendMessage = () => {}; // TODO

  useEffect(() => {
    if (post.ownerId) {
      getProfileInfo(post.ownerId, [
        ProfileInfoField.avatar,
        ProfileInfoField.name,
      ]).then((userInfo) => {
        setName(userInfo.name as string);
        setAvatar(userInfo.avatar as string);
      });
    }
  }, []);

  const roles: RolesInterface = {};
  const selectedRoles: SelectedRolesInterface = {};
  post.roles.forEach((role) => {
    roles[role] = Roles[role];
    selectedRoles[role] = true;
  });

  return (
    <Card post-id={postId} {...otherProps}>
      <VStack align="left">
        <HStack>
          <Avatar name={name} src={avatar} />
          <VStack align="left" spacing={0}>
            <Text fontSize="md" fontWeight={500}>
              {name}
            </Text>
            <Link to={`/post?id=${postId}`}>
              <Text
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
                color="gray.600"
              >
                {getDate(post.createdAt)}
              </Text>
            </Link>
          </VStack>
        </HStack>
        <Box
          overflow="hidden"
          textOverflow="ellipsis"
          display="block"
          wordWrap="break-word"
          maxHeight={post.images.length ? '6em' : '12em'}
          lineHeight="1.5m"
        >
          <Text>{post.description}</Text>
        </Box>
        <RoleList roles={roles} selectedRoles={selectedRoles} />
        <Box display="block" textAlign="left">
          {post.images.map((img) => (
            <Box
              key={img}
              width="100px"
              height="70px"
              display="inline-block"
              marginRight="2px"
              position="relative"
            >
              <Image
                src={img}
                alt="post image"
                objectFit="cover"
                width="100%"
                height="100%"
                position="relative"
                display="block"
              />
            </Box>
          ))}
        </Box>
        {post.ownerId === currentUid || (
          <Button
            onClick={handleSendMessage}
            variant="outline"
            colorScheme="orange"
            margin="auto 0"
            width="100%"
          >
            Message
          </Button>
        )}
      </VStack>
    </Card>
  );
};

export default Post;
