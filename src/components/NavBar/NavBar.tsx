import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { StyledLogoWrapper, StyledHeaderWrapper } from './NavBar.styles';

export interface NavBarProps {}

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <StyledHeaderWrapper>
      <StyledLogoWrapper>
        <img src={logo} alt="coLab Logo" />
      </StyledLogoWrapper>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
    </StyledHeaderWrapper>
  );
};

export default NavBar;
