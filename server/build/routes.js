"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controller/userController");
const multer = require('multer'); // Middleware for handling multipart/form-data (file uploads)
const upload = multer();
function routes(app) {
    app.get("/", userController_1.checkServer);
    // checking if username is available or taken
    app.post("/createuser", upload.single('file'), userController_1.createUser);
    app.post("/checkuserName", userController_1.checkUserName);
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
exports.default = routes;
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
