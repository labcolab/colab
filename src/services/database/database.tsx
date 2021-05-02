import React, { ReactNode, createContext } from 'react';
import { firestore } from '../firebase/firebase';
import * as FirebaseTypes from '../firebase/types';

interface PostType {
  title: string;
  description: string;
  roles: string[];
  images: string[];
}

interface DatabaseData {
  createPost: (post: PostType) => Promise<void>;
}

export const DatabaseContext = createContext<DatabaseData>({} as DatabaseData);

interface DatabaseProviderProps {
  children: ReactNode;
}

const createPost = async (post: PostType) => {
  const { title, description, roles, images } = post;
  await firestore.collection(FirebaseTypes.Collections.Posts).add({
    title,
    description,
    roles,
    images,
  });
};

export const DatabaseProvider = (props: DatabaseProviderProps) => (
  <DatabaseContext.Provider
    {...props}
    value={{
      createPost,
    }}
  />
);
