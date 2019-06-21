import config from './firebaseConfig';
import firebase from 'firebase';

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
// console.error('auth', auth, firebase.auth());

export { auth as Auth, db as Database };
