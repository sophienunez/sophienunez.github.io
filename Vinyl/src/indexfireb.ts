import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyDWaTTQutHKuW7kPwC9kqpfaXbWTbRMxMY",
    authDomain: "dca-2023-afd52.firebaseapp.com",
    projectId: "dca-2023-afd52",
    storageBucket: "dca-2023-afd52.appspot.com",
    messagingSenderId: "97358117911",
    appId: "1:97358117911:web:f912c307da85464abef052",
    measurementId: "G-HCP7FD37R8"

}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const email = 'hejil94005@rockdian.com';
const password = '123456777'
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    // Signed in
    console.log(userCredentials);
    
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);

  });

  //Pantalla de Log In
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Logged in User", user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

//Pantalla Home

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
//Enviar notificación al correo para reestablecer la contraseña
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    console.log("A messagge was sent to reset your password");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });