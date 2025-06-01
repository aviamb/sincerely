// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkaBDZm7W6FwC2koG2iMDIDViaU7BYrxY",
  authDomain: "sincerely-eb8a6.firebaseapp.com",
  projectId: "sincerely-eb8a6",
  storageBucket: "sincerely-eb8a6.firebasestorage.app",
  messagingSenderId: "353310573294",
  appId: "1:353310573294:web:06475f5fcae7cf98c369ff",
  measurementId: "G-F0T1EB016R"
};

// Initialize Firebase + firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage};

