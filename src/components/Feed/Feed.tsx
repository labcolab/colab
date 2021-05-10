import React, { useContext, useEffect, useState } from 'react';
import { Box, Image, Wrap, Center, Avatar, HStack, VStack, Text, IconButton, Button, WrapItem, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DatabaseContext, PostData, PostType } from '../../services/database/database';
import Card, { CardProps } from '../Card/Card';
import { AuthContext } from '../../services/auth/auth';
import RoleList from '../RoleList/RoleList';
import Roles, { RolesInterface, SelectedRolesInterface } from '../RoleTag/roles';
import Post from '../Post/Post';

export interface FeedProps {
}

const Feed = (props: FeedProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const { user } = useContext(AuthContext);
  const { getPosts } = useContext(DatabaseContext);

  useEffect(() => {
    const lastCreatedAt = posts[posts.length - 1]?.post.createdAt;
    getPosts(lastCreatedAt, 20).then((newPosts) => setPosts([...posts, ...newPosts]));
  }, []);

  return (
    <Center>
      <SimpleGrid columns={3} spacing="30px">
        {posts.map(({ post, postId }) => (
          <Box>
            <Post post={post} postId={postId} currentUid={user?.uid as string} height="400px" />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default Feed;
