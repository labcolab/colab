import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import CreatePost from '../../components/CreatePost/CreatePost';
import {
  StyledNavContainer,
  StyledFormContainer,
} from './CreateProject.styles';

export default function CreateProject() {
  return (
    <Box>
      {/* <StyledNavContainer>
        <Navbar />
      </StyledNavContainer> */}
      <Box>
        <CreatePost />
      </Box>
    </Box>
    // <CreatePost />
  );
}
