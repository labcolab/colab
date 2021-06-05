import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Image,
  Wrap,
  Center,
  Avatar,
  HStack,
  VStack,
  Spacer,
  Flex,
  Text,
  IconButton,
  Button,
  WrapItem,
  SimpleGrid,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  DatabaseContext,
  PostData,
  PostType,
} from '../../services/database/database';
import Card, { CardProps } from '../Card/Card';
import { AuthContext } from '../../services/auth/auth';
import RoleList from '../RoleList/RoleList';
import Roles, {
  RolesInterface,
  SelectedRolesInterface,
} from '../RoleTag/roles';
import Post from '../Post/Post';
import CreatePost from '../CreatePost/CreatePost';

export interface FeedProps {}

const Feed = (props: FeedProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const { user } = useContext(AuthContext);
  const { getPosts } = useContext(DatabaseContext);
  const {
    isOpen: showCreatePost,
    onToggle: toggleShowCreatePost,
  } = useDisclosure();
  const { isOpen: refreshFeed, onToggle: toggleRefreshFeed } = useDisclosure();

  useEffect(() => {
    // console.log('in use effect');
    // console.log({ refreshFeed });
    console.log({ user });
    const lastCreatedAt = posts[0]?.post.createdAt;
    // console.log({ lastCreatedAt });
    // console.log(posts.length);
    getPosts(undefined, 20, lastCreatedAt + 1).then((newPosts) => {
      //   // console.log
      setPosts([...newPosts, ...posts]);
    });
  }, [refreshFeed]);

  const handleCreatePost = () => {
    toggleShowCreatePost();
    toggleRefreshFeed();
  };

  return (
    <Center>
      <VStack>
        <Flex width="100%">
          <Text>Feed</Text>
          <Spacer />
          {showCreatePost || (
            <Button rightIcon={<AddIcon />} onClick={toggleShowCreatePost}>
              Create Post
            </Button>
          )}
        </Flex>
        <Collapse in={showCreatePost} animateOpacity>
          <CreatePost
            uid={user?.uid ?? ''}
            onClose={toggleShowCreatePost}
            onSuccess={handleCreatePost}
          />
        </Collapse>
        <SimpleGrid columns={3} spacing="30px">
          {posts.map(({ post, postId }) => (
            <Box key={postId}>
              <Post
                post={post}
                postId={postId}
                currentUid={user?.uid as string}
                height="400px"
              />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};

export default Feed;
