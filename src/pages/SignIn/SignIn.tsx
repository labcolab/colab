import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../services/auth/auth';
import SignInForm from '../../components/SignInForm/SignInForm';
import { SignUpLink } from '../../components/SignUpForm/SignUpForm';

const SignInPage = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <SignInForm />,
      <SignUpLink />
    </div>
  );
};

export default SignInPage;
