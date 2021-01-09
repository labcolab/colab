import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const env = import.meta.env || process.env;

const firebaseConfig = {
  apiKey: env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage().ref();
