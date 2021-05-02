import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../services/auth/auth';

const SignOut = () => {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    signOut();
  }, []);

  return user ? <></> : <Redirect to="/" />;
};

export default SignOut;
