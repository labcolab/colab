import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import { SignUp, SignUpLink } from '../../components/SignUp/SignUp';

export default function HomePage() {
  return (
    <div>
      <SignIn />,
      <SignUpLink />
    </div>

  );
}
