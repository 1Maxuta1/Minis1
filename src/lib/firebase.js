// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: "AIzaSyA5LY-ymlKPM3zKA92jxWs4SynPlQdPKvc",
  authDomain: "minis-c4f03.firebaseapp.com",
  projectId: "minis-c4f03",
  storageBucket: "minis-c4f03.appspot.com",
  messagingSenderId: "658531626423",
  appId: "1:658531626423:web:ab83d46732e34b3d678c32",
  measurementId: "G-58D7E3HZ5S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const emailAuthProvider = new EmailAuthProvider();
