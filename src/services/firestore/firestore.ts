import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUhcPFApoupkd8lg1J_J7M6qe8G0e9ilo',
  authDomain: 'colab-dff8b.firebaseapp.com',
  projectId: 'colab-dff8b',
};

enum Collections {
  Projects = 'projects',
  Users = 'users',
}

firebase.initializeApp(firebaseConfig);
const Firestore = firebase.firestore();
export default Firestore;
