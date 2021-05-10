import React, { useContext, useEffect } from 'react';
import {Box} from '@chakra-ui/react';
import { AuthContext } from '../../services/auth/auth';
import { DatabaseContext } from '../../services/database/database';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';

const DashboardPage = () => {
  return (
    <Box width="100%">
      <NavBar margin={5} maxW="1140px" />
    </Box>
  );
};

export default DashboardPage;
