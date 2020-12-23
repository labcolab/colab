import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { createContext } from 'react';

const env = import.meta.env || process.env;

const firebaseConfig = {
  apiKey: env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const FirebaseStuff = {
  firestore: firebase.firestore(),
  storage: firebase.storage().ref(),
};
export default FirebaseStuff;

export const FirebaseContext = createContext(FirebaseStuff);
