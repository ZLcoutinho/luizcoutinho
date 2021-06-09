import firebase from "firebase/app";
import "firebase/firestore";
import keys from "./keys"


const config = keys;

 if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  

 const firestore = firebase.firestore();

 export { firestore };