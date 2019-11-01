 import firebase from 'firebase'
 // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyC62JwNtgwT8qStmZELms3JelOm4b6RlPI",
    authDomain: "sehatpedia-62ae3.firebaseapp.com",
    databaseURL: "https://sehatpedia-62ae3.firebaseio.com",
    projectId: "sehatpedia-62ae3",
    storageBucket: "sehatpedia-62ae3.appspot.com",
    messagingSenderId: "692699466821",
    appId: "1:692699466821:web:3f9b6254497118e3"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(config);

  const db = firebase.firestore();
  
  export {fb,db}