// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-544ac.firebaseapp.com",
  projectId: "mern-estate-544ac",
  storageBucket: "mern-estate-544ac.appspot.com",
  messagingSenderId: "413386483543",
  appId: "1:413386483543:web:bdcb9fa107d432f3704012"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);