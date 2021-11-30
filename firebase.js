// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDfiJhZZcoNtUuPvmYX9ZCfZKaPHQkENrk",
  authDomain: "sendmetest-f9174.firebaseapp.com",
  projectId: "sendmetest-f9174",
  storageBucket: "sendmetest-f9174.appspot.com",
  messagingSenderId: "1023516306074",
  appId: "1:1023516306074:web:40df7613c48f92e7520d23",
  measurementId: "G-N4WKY49WLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);