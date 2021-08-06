// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB4zDSS1hvlWHhm-1WhEuB3VbjyJ4LEuUg",
    authDomain: "instagram-clone-dc6e3.firebaseapp.com",
    projectId: "instagram-clone-dc6e3",
    storageBucket: "instagram-clone-dc6e3.appspot.com",
    messagingSenderId: "13251640212",
    appId: "1:13251640212:web:5458f7e0d07dd4a2a46d81",
    measurementId: "G-M6N103RKJW"
  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db,auth, storage};