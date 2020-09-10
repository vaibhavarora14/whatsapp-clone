import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApiJSf34kamnEOpDUDtp5AySnDcJDC72Y",
    authDomain: "whatspp-clone-6c16b.firebaseapp.com",
    databaseURL: "https://whatspp-clone-6c16b.firebaseio.com",
    projectId: "whatspp-clone-6c16b",
    storageBucket: "whatspp-clone-6c16b.appspot.com",
    messagingSenderId: "916862460097",
    appId: "1:916862460097:web:4555f62d58be9b02aaf440",
    measurementId: "G-7NCM016ESD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;