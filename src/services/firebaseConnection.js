import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCauyL6jF8uQR7BFkqoa4CNIytDocIDMo4",
  authDomain: "finances-eb7d2.firebaseapp.com",
  databaseURL: "https://finances-eb7d2-default-rtdb.firebaseio.com",
  projectId: "finances-eb7d2",
  storageBucket: "finances-eb7d2.appspot.com",
  messagingSenderId: "404432780490",
  appId: "1:404432780490:web:1ea97542b49fe24f964833",
  measurementId: "G-SRZG9C9W2S"
};
// Initialize Firebase

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;