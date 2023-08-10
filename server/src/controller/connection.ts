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

export const acceptConnect= async (req: Request, res: Response) => {
    const uid = (req as any).uid; // Use 'as any' to bypass TypeScript error
    const connectionProfile=req.body.follower
    console.log(connectionProfile)
    try {
        const userDocRef = db.collection("user").doc(uid);
        const userDoc = await userDocRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({ error: "User not found" });
        }

        // Get the current followers array from the document
        const userData = userDoc.data();
        const currentFollowers = userData.connects || [];

        // Add the connectionProfile to the followers array
        const updatedFollowers = [...currentFollowers, connectionProfile];

        // Update the followers field in the document with the updated array
        await userDocRef.update({ connects: updatedFollowers });

        // Remove the connectionProfile from the followers array
        const updatedFollower = currentFollowers.filter(follower => follower !== connectionProfile);

        // Update the followers field in the document with the updated array
        await userDocRef.update({ followers: updatedFollower });


        res.status(200).json({ message: "Follower added successfully" });       
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
      }
}