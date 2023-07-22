import { Express } from "express";
import { checkUserName,checkServer,createUser,signinUser } from "./controller/userController";

export default function routes(app: Express) {
  // checking server
  app.get("/",checkServer );
  // checking if username is available or taken
  app.post("/checkuserName", checkUserName);
  
  app.post("/createuser", createUser);
  app.post("/signuser", signinUser);
}
