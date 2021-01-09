import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../services/auth/auth';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }
  return <SignUpForm />;
};

export default SignUpPage;
