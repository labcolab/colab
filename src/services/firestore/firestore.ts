import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
//   authDomain: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
// };
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

enum Collections {
  Projects = 'projects',
  Users = 'users',
}

firebase.initializeApp(firebaseConfig);
const Firestore = firebase.firestore();
export default Firestore;
