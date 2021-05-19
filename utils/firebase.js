import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBMdpE3S9k3FstIWdg6yOgpfr5_7cVbc9Y",
    authDomain: "meus-projetos-6a53c.firebaseapp.com",
    databaseURL: "https://meus-projetos-6a53c-default-rtdb.firebaseio.com",
    projectId: "meus-projetos-6a53c",
    storageBucket: "meus-projetos-6a53c.appspot.com",
    messagingSenderId: "304317702121",
    appId: "1:304317702121:web:f6496cdfc0b5092f663578"
  };

 if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  

 const firestore = firebase.firestore();

 export { firestore };