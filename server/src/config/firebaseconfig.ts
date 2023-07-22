import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { initializeFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');


import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.API_AUTHDOMAIN,
  // databaseURL: process.env.API_DATABASEURL,
  projectId: process.env.API_PROJECTID,
  storageBucket: process.env.API_STORAGEBUCKET,
  messagingSenderId: process.env.API_MESSAGINGSENDERID,
  appId: process.env.API_APPID,
  measurementId: process.env.API_MESSUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = getFirestore(app);
export const auth = getAuth(app);