// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwwNfIUKuy1yKfPgMkU-k9aDSaTU1ZMNc",
  authDomain: "fir-1st-assignment.firebaseapp.com",
  projectId: "fir-1st-assignment",
  storageBucket: "fir-1st-assignment.appspot.com",
  messagingSenderId: "339530394138",
  appId: "1:339530394138:web:16f08667d194e46c563fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;