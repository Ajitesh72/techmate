import { Request, Response } from "express";
import { auth,db } from "../config/firebaseconfig";
import { doc, setDoc , getDocs,query,where,collection} from "firebase/firestore"; 
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "firebase/auth";
import admin from "firebase-admin";

export const checkServer = (req: Request, res: Response) => {
  return res.status(200).send("Techmate server running");
};

export const checkUserName = async (req: Request, res: Response) => {
  const username = req.body.userName; // Access the userName from req.body
  // try {

  //   const userCollectionRef = collection(db, "user");
  //   const querySnapshot = await getDocs(userCollectionRef);
  //   console.log("query snapshot is:",querySnapshot.docs)
  // } catch (error) {
  //   console.error("Error printing documents:", error);
  // }
  return res.send("hey")
};

export const createUser = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // User account created successfully
      const user = userCredential.user;
      console.log("User created:", user.uid);

      // // Send email verification
      try{
          await sendEmailVerification(user);
          console.log("Verification email sent.");
          const userref = doc(db, "user", user.uid);
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
    
      signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Check if email is verified
        if (user.emailVerified) {
          return res.status(200).json({ message: "User signed in successfully" });
        } else {
          return res.status(200).json({ message: "Please verify your email before proceeding." });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in user:", errorCode, errorMessage);
        return res.status(500).json({ error: "Error signing in user" });
      });
  };