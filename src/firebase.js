import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR9Rnk7FTJ2UZFBZOSxFjWe0oJWreJnNg",
  authDomain: "ubais-portfolio.firebaseapp.com",
  projectId: "ubais-portfolio",
  storageBucket: "ubais-portfolio.appspot.com",
  messagingSenderId: "912281572033",
  appId: "1:912281572033:web:60eea1fad6686b58253a40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
