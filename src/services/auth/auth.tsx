import React, { ReactNode, createContext, useEffect } from 'react';
import firebase from 'firebase/app';
import useLocalStorage from '../../utils/useLocalStorage';
import { auth } from '../firebase/firebase';
import 'firebase/auth';
import { createUser } from '../database/database';
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

interface AuthData {
  user: firebase.User | null;
  signUpWithEmail: (
    email: string,
    password: string,
    name: string,
  ) => Promise<string>;
  signInWithEmail: (email: string, password: string) => Promise<string>;
  signInWithGoogle: () => Promise<string>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthData>({} as AuthData);

interface AuthProviderProps {
  children: ReactNode;
}

const signUpWithEmail = async (
  email: string,
  password: string,
  name: string,
) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  await user?.updateProfile({ displayName: name });
  await createUser(user as firebase.User);
  return user?.uid as string;
};

const signInWithEmail = async (email: string, password: string) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  return user?.uid as string;
};

const signInWithGoogle = async () => {
  const { user } = await auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider(),
  );
  await createUser(user as firebase.User);
  return user?.uid as string;
};

const signOut = async () => {
  await auth.signOut();
};

export const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<firebase.User | null>('user', null);

  useEffect(() => {
    auth.onAuthStateChanged((userObj) => {
      setUser(userObj);
      console.log({ userObj });
    });
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
