import { Express } from "express";
import { checkUserName,checkServer,createUser,signinUser,logout } from "./controller/userController";
import { validateToken } from "./middleware/validate";
import { getProfile } from "./controller/profile";
import { addPost } from "./controller/post";
import { eventsPage } from "./controller/events";

const multer = require('multer'); // Middleware for handling multipart/form-data (file uploads)
const upload = multer();
export default function routes(app: Express) {
  app.get("/",checkServer );
  // checking if username is available or taken
  app.post("/createuser", upload.single('file'),createUser);
  app.post("/checkuserName", checkUserName);
  app.post("/signuser", signinUser);
  app.post("/getprofile", validateToken, getProfile);
  app.post("/post", validateToken, addPost);
  app.post("/events", validateToken, eventsPage);
  app.post("/logout", validateToken, logout);
}