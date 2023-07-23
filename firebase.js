// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg2hZ-DExa__aErxRMDdpGC7Po05xthZo",
  authDomain: "whisperingapp.firebaseapp.com",
  projectId: "whisperingapp",
  storageBucket: "whisperingapp.appspot.com",
  messagingSenderId: "270392577249",
  appId: "1:270392577249:web:04d9a7af6d4b0206cb3ba0",
  measurementId: "G-VJLMH12YET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);