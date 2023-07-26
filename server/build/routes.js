"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controller/userController");
const validate_1 = require("./middleware/validate");
const profile_1 = require("./controller/profile");
const multer = require('multer'); // Middleware for handling multipart/form-data (file uploads)
const upload = multer();
function routes(app) {
    app.get("/", userController_1.checkServer);
    // checking if username is available or taken
    app.post("/createuser", upload.single('file'), userController_1.createUser);
    app.post("/checkuserName", userController_1.checkUserName);
    app.post("/signuser", userController_1.signinUser);
    app.post("/getprofile", validate_1.validateToken, profile_1.getProfile);
}
exports.default = routes;
