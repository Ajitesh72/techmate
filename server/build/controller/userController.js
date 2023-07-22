"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinUser = exports.createUser = exports.checkUserName = exports.checkServer = void 0;
const firebaseconfig_1 = require("../config/firebaseconfig");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
const checkServer = (req, res) => {
    return res.status(200).send("Techmate server running");
};
exports.checkServer = checkServer;
const checkUserName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.userName; // Access the userName from req.body
    // try {
    //   const userCollectionRef = collection(db, "user");
    //   const querySnapshot = await getDocs(userCollectionRef);
    //   console.log("query snapshot is:",querySnapshot.docs)
    // } catch (error) {
    //   console.error("Error printing documents:", error);
    // }
    return res.send("hey");
});
exports.checkUserName = checkUserName;
const createUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    (0, auth_1.createUserWithEmailAndPassword)(firebaseconfig_1.auth, email, password)
        .then((userCredential) => __awaiter(void 0, void 0, void 0, function* () {
        // User account created successfully
        const user = userCredential.user;
        console.log("User created:", user.uid);
        // // Send email verification
        try {
            yield (0, auth_1.sendEmailVerification)(user);
            console.log("Verification email sent.");
            const userref = (0, firestore_1.doc)(firebaseconfig_1.db, "user", user.uid);
            return res.status(200).send("User Created");
        }
        catch (error) {
            console.error("Error sending verification email:", error);
            return res.status(500).send("Error sending verification email");
        }
    }))
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
        return res.status(500).send("Error creating user");
    });
};
exports.createUser = createUser;
const signinUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    (0, auth_1.signInWithEmailAndPassword)(firebaseconfig_1.auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        // Check if email is verified
        if (user.emailVerified) {
            return res.status(200).json({ message: "User signed in successfully" });
        }
        else {
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
exports.signinUser = signinUser;
