// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6zy7xzugOo6bhqnvh2w3vHVzWQgjRTBs",
  authDomain: "social-media-ad91f.firebaseapp.com",
  projectId: "social-media-ad91f",
  storageBucket: "social-media-ad91f.appspot.com",
  messagingSenderId: "477374456053",
  appId: "1:477374456053:web:0a29c52402912a6786a5bc",
  measurementId: "G-X367MWHKTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);