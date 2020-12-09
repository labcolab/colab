import { Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Feed from '../../components/Feed/Feed';
import './Home.css';

export default function HomePage() {
  return (
    <Container w="100%" h="100%">
      <Container className="nav">
        <Navbar />
      </Container>
      <Container className="form">
        <Feed />
      </Container>
    </Container>
  );
}
