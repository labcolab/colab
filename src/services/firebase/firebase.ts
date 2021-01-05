import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
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

  auth = firebase.auth();

  async signUpWithEmail(email: string, password: string) {
    const user = await this.auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    return user;
  }

  async signInWithEmail(email: string, password: string) {
    const user = await this.auth.signInWithEmailAndPassword(email, password);
    return user;
  }

  async signInWithGoogle() {
    const user = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider(),
    );
    return user;
  }

  async signOut() {
    const user = await this.auth.signOut();
    return user;
  }

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

  async addProject(project: FirebaseTypes.PostType) {
    const { title, description, roles, images } = project;
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
}

export default Firebase;
export const FirebaseContext = createContext<Firebase>({} as Firebase);
