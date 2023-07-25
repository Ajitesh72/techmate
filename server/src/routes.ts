import { Express } from "express";
import { checkUserName,checkServer,createUser,signinUser } from "./controller/userController";

const multer = require('multer'); // Middleware for handling multipart/form-data (file uploads)
const upload = multer();
export default function routes(app: Express) {
  app.get("/",checkServer );
  // checking if username is available or taken
  app.post("/createuser", upload.single('file'),createUser);
  app.post("/checkuserName", checkUserName);
//   app.post('/createuser', upload.single('file'), (req, res) => {
  
//     // Access the uploaded file (if present) using req.file
//     const selectedPhoto = req.file;
//     console.log(selectedPhoto)
//     // Your user creation logic here
//     // For example, save the user data to a database
  
//     // Respond with a success message
//     res.status(200).json({ message: 'User created successfully' });
//   });
  
//   app.post("/signuser", signinUser);
// }
}