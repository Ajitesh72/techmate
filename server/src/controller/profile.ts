import { Request, Response } from "express";
import { admin, app } from "../config/firebaseconfig";
import { getAuth } from "firebase/auth";
import { addData } from "../utils/addData";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { QueryDocumentSnapshot, QuerySnapshot } from "firebase-admin/firestore"; // Import the types
import multer, { Multer } from "multer";

const db = admin.firestore();
const auth = getAuth(app);
const auth_admin = admin.auth();

const bucket = admin.storage().bucket();

// interface CustomRequest extends Request {
//     uid: string; // Add the 'uid' property to the request
//     file: Express.Multer.File;
//   }
export const getProfile = async (req: Request, res: Response) => {
    // const uid=req.body.uid;
    const uid = (req as any).uid; // Use 'as any' to bypass TypeScript error
    console.log(uid)
    console.log("profile function here")
    res.send("profile data found")
  };