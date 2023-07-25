import { error } from "console";
import { admin, app } from "../config/firebaseconfig";
import { Request, Response } from "express";



const db = admin.firestore();
const bucket = admin.storage().bucket();

export const addData = async (req:Request, res: Response) => {
  const username = req.body.userName;
  const email = req.body.email;
  const gender = req.body.usergender;
  const profession = req.body.userProfession;
  const userlocation = JSON.parse(req.body.userlocation); // Convert JSON string to an object
  const { town, suburb, state, country } = userlocation; // Destructure the properties
  console.log(town)
  const selectedPhoto = req.file;


  if (!selectedPhoto) {
    return res.status(400).send('No photo selected.');
  }
  try {
    const userres = await db.collection("user").add({
      username,
      email,
      gender,
      profession,
      "location":{
        town,suburb,state,country
      },
    });
    const usernameres = await db.collection("usernames").add({
      username,
    });
    console.log("User Added document with ID: ", userres.id);
    console.log("Username added with ID: ", usernameres.id);
        // File upload to Firebase Storage
        // const bucketFileName = `user_photos/${selectedPhoto.originalname}`;
        const bucketFileName = `${username}`;
        const bucketFile = bucket.file(bucketFileName);
        await bucketFile.save(selectedPhoto.buffer, {
          metadata: {
            contentType: selectedPhoto.mimetype,
          },
        });
  } catch (error) {
    console.log(error);
    return error;
  }
  
};
