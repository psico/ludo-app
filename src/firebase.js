import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGb39lkfIWcaMIu9NBy8wpF57JUwnPs0g",
    authDomain: "ludoapp-b612.firebaseapp.com",
    databaseURL: "https://ludoapp-b612.firebaseio.com",
    projectId: "ludoapp-b612",
    storageBucket: "ludoapp-b612.appspot.com",
    messagingSenderId: "723114001632",
    appId: "1:723114001632:web:4737b4c1bca3d8c58dfc85",
    measurementId: "G-WSMPGC1PCR"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
