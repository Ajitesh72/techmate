"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = exports.app = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
// import { initializeFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
const auth_1 = require("firebase/auth");
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
exports.app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(exports.app);
// export const db = getFirestore(app);
exports.auth = (0, auth_1.getAuth)(exports.app);
