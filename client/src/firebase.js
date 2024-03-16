// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-95d8b.firebaseapp.com",
  projectId: "mern-blog-95d8b",
  storageBucket: "mern-blog-95d8b.appspot.com",
  messagingSenderId: "862675138328",
  appId: "1:862675138328:web:cad18e77ea4214cc79106d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
