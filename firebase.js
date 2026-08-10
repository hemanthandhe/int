// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEfYK5nWz7NKkUlyJYmLUMrZ1gki30Wao",
  authDomain: "speechtodo-62326.firebaseapp.com",
  databaseURL: "https://speechtodo-62326-default-rtdb.firebaseio.com",
  projectId: "speechtodo-62326",
  storageBucket: "speechtodo-62326.firebasestorage.app",
  messagingSenderId: "198151845686",
  appId: "1:198151845686:web:27528bedcd12b0755c6597",
  measurementId: "G-MG9S6RG5B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);