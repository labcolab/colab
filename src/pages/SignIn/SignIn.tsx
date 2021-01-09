import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import { SignUpLink } from '../../components/SignUpForm/SignUpForm';

export default function HomePage() {
  return (
    <div>
      <SignInForm />,
      <SignUpLink />
    </div>
  );
}
