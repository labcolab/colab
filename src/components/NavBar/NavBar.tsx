import React from 'react';
import logo from '../../assets/logo.svg';
import { StyledLogoWrapper, StyledHeaderWrapper } from './NavBar.styles';

export interface NavBarProps {}

const NavBar = () => (
  <StyledHeaderWrapper>
    <StyledLogoWrapper>
      <img src={logo} alt="coLab Logo" />
    </StyledLogoWrapper>
  </StyledHeaderWrapper>
);

export default NavBar;
