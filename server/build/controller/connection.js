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
exports.acceptConnect = void 0;
const firebaseconfig_1 = require("../config/firebaseconfig");
const auth_1 = require("firebase/auth");
const db = firebaseconfig_1.admin.firestore();
const auth = (0, auth_1.getAuth)(firebaseconfig_1.app);
const auth_admin = firebaseconfig_1.admin.auth();
const bucket = firebaseconfig_1.admin.storage().bucket();
const acceptConnect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.uid; // Use 'as any' to bypass TypeScript error
    const connectionProfile = req.body.follower;
    console.log(connectionProfile);
    try {
        const userDocRef = db.collection("user").doc(uid);
        const userDoc = yield userDocRef.get();
        if (!userDoc.exists) {
            return res.status(404).json({ error: "User not found" });
        }
        // Get the current followers array from the document
        const userData = userDoc.data();
        const currentFollowers = userData.connects || [];
        // Add the connectionProfile to the followers array
        const updatedFollowers = [...currentFollowers, connectionProfile];
        // Update the followers field in the document with the updated array
        yield userDocRef.update({ connects: updatedFollowers });
        // Remove the connectionProfile from the followers array
        const updatedFollower = currentFollowers.filter(follower => follower !== connectionProfile);
        // Update the followers field in the document with the updated array
        yield userDocRef.update({ followers: updatedFollower });
        res.status(200).json({ message: "Follower added successfully" });
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});
exports.acceptConnect = acceptConnect;
