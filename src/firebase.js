import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBXn0EutEfPDIqmWMx6wCRi7GJFGxu7lrs",
    authDomain: "whatsapp-clone-2001b.firebaseapp.com",
    projectId: "whatsapp-clone-2001b",
    storageBucket: "whatsapp-clone-2001b.appspot.com",
    messagingSenderId: "405237633616",
    appId: "1:405237633616:web:ebe982f6155f445f0df755",
    measurementId: "G-8CGXPH8HSL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default database;