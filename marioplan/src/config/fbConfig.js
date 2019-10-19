import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDLPGLVehR4b8CLVLip3Y7-Kbtwex5pnUY",
    authDomain: "net-ninja-marioplan-a223f.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-a223f.firebaseio.com",
    projectId: "net-ninja-marioplan-a223f",
    storageBucket: "net-ninja-marioplan-a223f.appspot.com",
    messagingSenderId: "810960674535",
    appId: "1:810960674535:web:a36ede0f7558bfa8ae8c42",
    measurementId: "G-08BCV654MB"
};
firebase.initializeApp(config);
firebase.firestore().settings({  });

export default firebase 