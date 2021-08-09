import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBt7spzA7gE8h-HCqfIjRS4oGP5Jr9RRUA",
  authDomain: "finances-7f89b.firebaseapp.com",
  projectId: "finances-7f89b",
  storageBucket: "finances-7f89b.appspot.com",
  messagingSenderId: "208685700014",
  appId: "1:208685700014:web:0fe8e0f7f0fc1f47b4ee3f",
  measurementId: "G-JXYVJ8J5C6"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;