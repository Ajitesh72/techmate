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

export const firstBatch= async (req: Request, res: Response) => {

    const uid = (req as any).uid; // Use 'as any' to bypass TypeScript error
    console.log("hii")
    const usersCollectionRef = db.collection('user');
    usersCollectionRef.get()
    .then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        // Include the document ID as part of the data
        console.log(doc.data())
        users.push({ id: doc.id, ...doc.data() });
      });

      // Send the response with the data
      res.json(users);
    })
    .catch((error) => {
      console.error('Error getting documents: ', error);
      res.status(500).json({ error: 'Something went wrong' });
    });
}