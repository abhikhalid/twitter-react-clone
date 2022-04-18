import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCGr6Ecz2e-DdDgU-iKc8u-H9dkKNUBy6I",
    authDomain: "twitter-clone-ad857.firebaseapp.com",
    projectId: "twitter-clone-ad857",
    storageBucket: "twitter-clone-ad857.appspot.com",
    messagingSenderId: "1031586206416",
    appId: "1:1031586206416:web:f42ca30d3bfd505b4dc4d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;