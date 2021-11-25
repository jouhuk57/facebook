import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCX8uNT3T4Rn66fTnbD6UOdpg8_cv_72Tg",
    authDomain: "facebook-360de.firebaseapp.com",
    projectId: "facebook-360de",
    storageBucket: "facebook-360de.appspot.com",
    messagingSenderId: "593525197975",
    appId: "1:593525197975:web:ee626c4f4aca471e0c6dd2",
    measurementId: "G-W1RY275S8Z"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;