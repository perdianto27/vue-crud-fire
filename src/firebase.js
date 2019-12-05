import firebase from 'firebase'
import 'firebase/firebase-auth'
 // Your web app's Firebase configuration
  var config = {
    apiKey: "YOUR_FIREBASE_CONFIG",//AIzaSyC62JwNtgwT8qStmZELms3JelOm
    authDomain: "YOUR_FIREBASE_CONFIG", //your-config.firebaseapp.com
    databaseURL: "YOUR_FIREBASE_CONFIG",//https://your-config.firebaseio.com
    projectId: "YOUR_FIREBASE_CONFIG",//your-config
    storageBucket: "YOUR_FIREBASE_CONFIG",//your-config.appspot.com
    messagingSenderId: "YOUR_FIREBASE_CONFIG",//6926994
    appId: "YOUR_FIREBASE_CONFIG"//1:6926994:web:3f9b625
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(config);
  const db = firebase.firestore();

  export {fb,db}