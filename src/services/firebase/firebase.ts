import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { createContext } from 'react';

const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: 'gs://colab-dff8b.appspot.com',
};

firebase.initializeApp(firebaseConfig);

const FirebaseStuff = {
  firestore: firebase.firestore(),
  storage: firebase.storage().ref(),
};
export default FirebaseStuff;

export const FirebaseContext = createContext(FirebaseStuff);
