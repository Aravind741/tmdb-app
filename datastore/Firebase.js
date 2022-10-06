import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB89JbK5OIlNdUCFxB2DcTpGLI5DdIWAfc",
  authDomain: "tmdb-37a64.firebaseapp.com",
  projectId: "tmdb-37a64",
  storageBucket: "tmdb-37a64.appspot.com",
  messagingSenderId: "97145152366",
  appId: "1:97145152366:web:2005beadc874c2aa31977f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}