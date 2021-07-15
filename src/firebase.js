import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhWvp8nP_MxxW6K8sHsrXhilMJbAN3Boo",
  authDomain: "qa-forum-5b86a.firebaseapp.com",
  projectId: "qa-forum-5b86a",
  storageBucket: "qa-forum-5b86a.appspot.com",
  messagingSenderId: "2007479294",
  appId: "1:2007479294:web:c9c70e96af7b6cb68606af",
  measurementId: "G-7C9SHQWQGH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;