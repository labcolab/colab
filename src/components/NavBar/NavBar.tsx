import React, { useState } from 'react';
import { Container, Grid, GridItem, Box } from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';

export interface NavBarProps {}

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {};

  return (
    <Container maxW="xl">
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <img src={logo} alt="coLab Logo" />
        </GridItem>
        <GridItem colSpan={3}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Box align="right">
            <UserMenu
              name="Dan Abrahmovddd"
              avatar="https://bit.ly/dan-abramov"
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default NavBar;
