// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqQ5x4_VPyiKqHAFB0OPsU3y9RmB8amWM",
  authDomain: "realtor-clone-6ce3b.firebaseapp.com",
  projectId: "realtor-clone-6ce3b",
  storageBucket: "realtor-clone-6ce3b.appspot.com",
  messagingSenderId: "169039999905",
  appId: "1:169039999905:web:65e4c2618fcd1c2c8b51e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()