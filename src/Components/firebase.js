import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBnRZyPFGfasYhA0FPnsu1rK8sod7LeCxM",
  authDomain: "survey-b671f.firebaseapp.com",
  projectId: "survey-b671f",
  storageBucket: "survey-b671f.appspot.com",
  messagingSenderId: "674212308852",
  appId: "1:674212308852:web:1f79ec8ca203d007cfee21"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let storage = firebase.storage();


export default {
  firebase, db, storage
}


