import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCUbTAYMowmE8ZHSY5W-BLSs38sq6tlPAc",
  authDomain: "fir-reactnextfirebase.firebaseapp.com",
  projectId: "fir-reactnextfirebase",
  storageBucket: "fir-reactnextfirebase.appspot.com",
  messagingSenderId: "542574258395",
  appId: "1:542574258395:web:ea373112d6eea4a70884fe",
  measurementId: "G-BKN94KPZZQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage(); 
