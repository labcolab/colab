import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import { SignUpForm, SignUpLink } from '../../components/SignUp/SignUp';

export default function HomePage() {
  return (
    <div>
      <SignIn />,
      <SignUpLink />
    </div>

  );
}
