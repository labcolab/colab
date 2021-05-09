import React, { ReactNode, createContext } from 'react';
import type firebase from 'firebase/app';
import type { History } from 'history';
import { firestore } from '../firebase/firebase';

export enum Collections {
  Posts = 'posts',
  Users = 'users',
}

interface PostType {
  title: string;
  description: string;
  roles: string[];
  images: string[];
}

interface DatabaseData {
  createPost: (post: PostType) => Promise<void>;
  createUser: (user: firebase.User) => Promise<string>;
  setUserRoles: (email: string, roles: string[]) => Promise<void>;
  completeAuthProcess: (user: firebase.User, history: History) => Promise<void>;
}

export const DatabaseContext = createContext<DatabaseData>({} as DatabaseData);

interface DatabaseProviderProps {
  children: ReactNode;
}

const createPost = async (post: PostType) => {
  const { title, description, roles, images } = post;
  await firestore.collection(Collections.Posts).add({
    title,
    description,
    roles,
    images,
  });
};

export const createUser = async (user: firebase.User) => {
  const { email, uid, displayName } = user;
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  if (!userDoc.exists) {
    await userDocRef.set({
      email,
      name: displayName,
      username: displayName?.replace(/\s/g, ''),
    });
  }
  return uid;
};

const completeAuthProcess = async (user: firebase.User, history: History) => {
  const uid = await createUser(user);
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  if (userDoc.exists) {
    const docData = userDoc.data();
    console.log({ docData });
    console.log({ roles: docData?.roles });
    if (!docData?.roles) {
      history.push('/roles');
    } else if (!docData?.categories) {
      history.push('/categories');
    } else {
      history.push('/test');
    }
  }
};

const setUserRoles = async (uid: string, roles: string[]) => {
  await firestore.collection(Collections.Users).doc(uid).update({ roles });
};

export const DatabaseProvider = (props: DatabaseProviderProps) => (
  <DatabaseContext.Provider
    {...props}
    value={{
      createPost,
      createUser,
      setUserRoles,
      completeAuthProcess,
    }}
  />
);
