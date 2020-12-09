import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import ProjectForm from '../../components/ProjectForm/ProjectForm';
import './CreateProject.css';

export default function CreateProject() {
  return (
    <Container w="100%" h="100%">
      <Container className="nav">
        <Navbar />
      </Container>
      <Container className="form">
        <ProjectForm />
      </Container>
    </Container>
  );
}
