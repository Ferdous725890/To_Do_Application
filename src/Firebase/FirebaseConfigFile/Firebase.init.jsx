// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOTzl7ljdbOfrGO5_gaZ83gS5jRMlZKaA",
  authDomain: "recap-firbase-f3bc2.firebaseapp.com",
  projectId: "recap-firbase-f3bc2",
  storageBucket: "recap-firbase-f3bc2.firebasestorage.app",
  messagingSenderId: "738250664306",
  appId: "1:738250664306:web:f3d74cee164c33fa3215eb",
  measurementId: "G-YH65HKXH67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default(auth)