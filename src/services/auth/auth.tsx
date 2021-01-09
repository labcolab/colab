import React, { ReactNode, useState, createContext } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase/firebase';
import 'firebase/auth';

interface AuthData {
  user: firebase.auth.UserCredential | null;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.auth.UserCredential | null>(null);

  const signUpWithEmail = async (email: string, password: string) => {
    setUser(await auth.createUserWithEmailAndPassword(email, password));
  };

  const signInWithEmail = async (email: string, password: string) => {
    setUser(await auth.signInWithEmailAndPassword(email, password));
  };

  const signInWithGoogle = async () => {
    setUser(await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  };

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      {...props}
      value={{
        user,
        signUpWithEmail,
        signInWithEmail,
        signInWithGoogle,
        signOut,
      }}
    />
  );
};
