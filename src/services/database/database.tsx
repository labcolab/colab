import React, { ReactNode, createContext } from 'react';
import type firebase from 'firebase/app';
import type { History } from 'history';
import { firestore } from '../firebase/firebase';

export enum Collections {
  Posts = 'posts',
  Users = 'users',
}

export interface PostType {
  title: string;
  description: string;
  roles: string[];
  images: string[];
  ownerId: string,
  createdAt: number
}

export interface PostData {
  post: PostType;
  postId: string;
}

export interface ProfileInfo {
  name?: string;
  email?: string;
  avatar?: string;
  username?: string;
  roles?: string[];
}

export enum ProfileInfoField {
  name = 'name',
  email = 'email',
  avatar = 'avatar',
  username = 'username',
  roles = 'roles',
}

interface DatabaseData {
  createPost: (post: PostType) => Promise<void>;
  createUser: (user: firebase.User) => Promise<string>;
  getProfileInfo: (uid: string, fields: ProfileInfoField[]) => Promise<ProfileInfo>;
  getPosts: (lastPostTimestamp: number | undefined, take: number) => Promise<PostData[]>;
  setUserRoles: (email: string, roles: string[]) => Promise<void>;
  completeAuthProcess: (user: firebase.User, history: History) => Promise<void>;
}

export const DatabaseContext = createContext<DatabaseData>({} as DatabaseData);

interface DatabaseProviderProps {
  children: ReactNode;
}

const createPost = async (post: PostType) => {
  await firestore.collection(Collections.Posts).add(post);
};

const getProfileInfo = async (uid: string, fields: ProfileInfoField[]) => {
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  const docData = userDoc.data() ?? {};
  const profileInfo: ProfileInfo = {};
  fields.forEach((field) => {
    profileInfo[field] = docData[field];
  });
  return profileInfo;
};

const getPosts = async (lastPostTimestamp = Number.MAX_SAFE_INTEGER, take = 20) => {
  const postDocs = await firestore.collection(Collections.Posts)
    .orderBy('createdAt', 'desc')
    .startAfter(lastPostTimestamp)
    .limit(take)
    .get();

  return postDocs.docs.map<PostData>((postDoc) => ({
    post: postDoc.data() as PostType,
    postId: postDoc.id,
  }));
};

export const createUser = async (user: firebase.User) => {
  const { email, uid, displayName, photoURL } = user;
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  if (!userDoc.exists) {
    await userDocRef.set({
      email,
      name: displayName,
      username: displayName?.replace(/\s/g, ''),
      avatar: photoURL,
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
      getPosts,
      completeAuthProcess,
      getProfileInfo,
    }}
  />
);
