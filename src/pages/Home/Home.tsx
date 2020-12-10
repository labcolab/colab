import { Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Feed from '../../components/Feed/Feed';
import { StyledNavContainer, StyledFeedContainer } from './Home.styles';

export default function HomePage() {
  return (
    <Container w="100%" h="100%">
      <StyledNavContainer>
        <Navbar />
      </StyledNavContainer>
      <StyledFeedContainer className="form">
        <Feed />
      </StyledFeedContainer>
    </Container>
  );
}
