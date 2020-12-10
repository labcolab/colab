import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import ProjectForm from '../../components/ProjectForm/ProjectForm';
import {
  StyledNavContainer,
  StyledFormContainer,
} from './CreateProject.styles';

export default function CreateProject() {
  return (
    <Container w="100%" h="100%">
      <StyledNavContainer>
        <Navbar />
      </StyledNavContainer>
      <StyledFormContainer>
        <ProjectForm />
      </StyledFormContainer>
    </Container>
  );
}
