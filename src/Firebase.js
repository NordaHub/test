// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgFIZZk1dn96-2Lv2mMQX0YnIuUlL3cb4",
  authDomain: "apptest-c00e4.firebaseapp.com",
  databaseURL: "https://apptest-c00e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "apptest-c00e4",
  storageBucket: "apptest-c00e4.appspot.com",
  messagingSenderId: "1081384681203",
  appId: "1:1081384681203:web:6dcb980c8ba6f5fae00186",
  measurementId: "G-89ZK7KT0B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const database = getDatabase(app);