import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCmc3r-JJLu0cDk0rU2ecXNVy1K7Is73us",
  authDomain: "learnhattan-v1.firebaseapp.com",
  projectId: "learnhattan-v1",
  storageBucket: "learnhattan-v1.appspot.com",
  messagingSenderId: "988162200345",
  appId: "1:988162200345:web:b5226380b8b2358d1e2b88",
  measurementId: "G-9W4LBJ30GJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);
const realTimeDB = getDatabase(app);

export { auth, app, imgDB, txtDB, realTimeDB };
