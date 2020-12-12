import firebase from 'firebase/app';
import 'firebase/firestore';
import { createContext } from 'react';

const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);
const Firestore = firebase.firestore();
export default Firestore;

export const FirestoreContext = createContext<firebase.firestore.Firestore>(
  Firestore,
);
