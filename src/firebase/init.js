 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCY2aKXIstA-lrph4gMcE_9S4oBh7dFrFg",
    authDomain: "master-smoothies.firebaseapp.com",
    databaseURL: "https://master-smoothies.firebaseio.com",
    projectId: "master-smoothies",
    storageBucket: "master-smoothies.appspot.com",
    messagingSenderId: "450905388314",
    appId: "1:450905388314:web:80f654d1be1e53861ee8a3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  // export firestore database
  export default firebaseApp.firestore()