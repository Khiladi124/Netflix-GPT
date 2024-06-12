// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZN5bnLZui56PzFsAmoTl3TF-ZcsQTTI",
  authDomain: "netflix-gpt-70dbd.firebaseapp.com",
  projectId: "netflix-gpt-70dbd",
  storageBucket: "netflix-gpt-70dbd.appspot.com",
  messagingSenderId: "655452630162",
  appId: "1:655452630162:web:b584ade1743a88ac810a4b",
  measurementId: "G-ME8GKH8B45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();