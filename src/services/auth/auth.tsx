import React, { ReactNode, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import useLocalStorage from '../../utils/useLocalStorage';
import { auth } from '../firebase/firebase';
import 'firebase/auth';

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

interface AuthData {
  user: firebase.User | null;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

interface AuthProviderProps {
  children: ReactNode;
}

const signUpWithEmail = async (email: string, password: string) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

const signInWithEmail = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password);
};

const signInWithGoogle = async () => {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
};

const signOut = async () => {
  await auth.signOut();
};

export const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<firebase.User | null>('user', null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

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
