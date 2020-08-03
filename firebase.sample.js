// import firebase from "firebase";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(firebaseConfig);
export default firebase;
