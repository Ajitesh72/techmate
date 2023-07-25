import { Request, Response } from "express";
import { admin,app } from "../config/firebaseconfig";
import { getAuth } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "firebase/auth";
import { QueryDocumentSnapshot, QuerySnapshot } from "firebase-admin/firestore"; // Import the types


const db=admin.firestore();
const auth = getAuth(app);

export const checkServer = (req: Request, res: Response) => {
  return res.status(200).send("Techmate server running");
};

export const checkUserName = async (req: Request, res: Response) => {
  const username = req.body.userName; // Access the userName from req.body
  console.log(username)
  try {
    let query = db.collection('usernames').where('username', '==', username);
    const querySnapshot = await query.get();
    // Check if the querySnapshot is empty
    if (querySnapshot.empty) {
      console.log("No documents found with username === 'trial'");
      return res.send("Username available");
    } else {
      querySnapshot.forEach((documentSnapshot: QueryDocumentSnapshot) => {
        console.log(`Found document at ${documentSnapshot.ref.path}`);
        return res.send("Username unavailable");
      });
    }

  } catch (error) {
    console.error("Error querying the user collection:", error);
    return res.status(500).send(error);

  }
};

export const createUser = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // User account created successfully
      const user = userCredential.user;
      console.log("User created:", user.uid);
      // // Send email verification
      try{
          await sendEmailVerification(user);
          console.log("Verification email sent.");
          return res.status(200).send("User Created");

        }catch(error){
            console.error("Error sending verification email:", error);
            return res.status(500).send("Error sending verification email");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
      return res.status(500).send("Error creating user");
    });
};
export const signinUser = (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
     var userId: string;
      signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Check if email is verified
        if (user.emailVerified) {
          user.getIdToken(true)
        .then((id)=>{
          return res.status(200).json({ message: "User signed in successfully","token":id});
        })
        } else {
          return res.status(200).json({ message: "Please verify your email before proceeding." });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in user:", errorCode, errorMessage);
        return res.status(500).json({ error: "Please check your credentials" });
      });
   
  };