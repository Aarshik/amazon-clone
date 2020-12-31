// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1c9UmVPiXs3YIav7jS40JxdDROFdU6eo",
    authDomain: "clone-6e35a.firebaseapp.com",
    projectId: "clone-6e35a",
    storageBucket: "clone-6e35a.appspot.com",
    messagingSenderId: "332713335391",
    appId: "1:332713335391:web:736bb2b9a18b2c818199ea",
    measurementId: "G-CNBPMEJDX3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   
  const db = firebaseApp.firestore();
  const auth= firebase.auth();


  export {db,auth};