import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4xfgYawER9ZYyuvW27imovAq7seRd6Qc",
    authDomain: "app-firebase-ff296.firebaseapp.com",
    projectId: "app-firebase-ff296",
    storageBucket: "app-firebase-ff296.appspot.com",
    messagingSenderId: "443783021562",
    appId: "1:443783021562:web:80062bd4669605d95e5a43"
  };

  firebase.initializeApp(firebaseConfig)
  //const database = firebase.firestore()

  export default firebase
  //export default database