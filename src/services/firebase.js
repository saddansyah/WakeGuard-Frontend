import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQpouBEPDDHVVxRffp7qlk5Iit957pj0o",
    authDomain: "wakeguard-bc9de.firebaseapp.com",
    projectId: "wakeguard-bc9de",
    storageBucket: "wakeguard-bc9de.appspot.com",
    messagingSenderId: "997842352563",
    appId: "1:997842352563:web:e288a137c17a8b17e873c6",
    measurementId: "G-ZPB5HDQ8QG"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Google Auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {auth, signInWithGoogle, firebase};