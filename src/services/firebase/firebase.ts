import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { createContext } from 'react';
import { v4 as generateId } from 'uuid';
import * as FirebaseTypes from './types';

const env = import.meta.env || process.env;

const firebaseConfig = {
  apiKey: env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
};
firebase.initializeApp(firebaseConfig);

class Firebase {
  firestore = firebase.firestore();

  storage = firebase.storage().ref();

  async storeImages(selectedFiles: File[]): Promise<string[]> {
    if (selectedFiles) {
      const snapshotPromises: firebase.storage.UploadTask[] = [];
      selectedFiles.forEach((file) => {
        const id = generateId();
        const extension = file.name.substr(file.name.lastIndexOf('.'));
        const newFilename = id + extension;
        const childRef = this.storage.child(newFilename);
        snapshotPromises.push(childRef.put(file));
      });
      const snapshots = await Promise.all(snapshotPromises);
      const urlPromises: Promise<string>[] = [];
      snapshots.forEach(({ ref }) => {
        urlPromises.push(ref.getDownloadURL());
      });
      const urls = await Promise.all(urlPromises);
      return urls;
    }
    return [];
  }

  async createPost(post: FirebaseTypes.PostType) {
    const { title, description, roles, images } = post;
    const doc = await this.firestore
      .collection(FirebaseTypes.Collections.Posts)
      .add({
        title,
        description,
        roles,
        images,
      });
    return doc;
  }

  async createUser(user: FirebaseTypes.UserType) {
    const doc = await this.firestore.collection(FirebaseTypes.Collections.Users)
      .add(user);
    return doc;
  }
}

export default Firebase;
export const FirebaseContext = createContext<Firebase>({} as Firebase);
