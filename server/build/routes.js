"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controller/userController");
function routes(app) {
    // checking server
    app.get("/", userController_1.checkServer);
    // checking if username is available or taken
    app.post("/checkuserName", userController_1.checkUserName);
    app.post("/createuser", userController_1.createUser);
    app.post("/signuser", userController_1.signinUser);
}
exports.default = routes;
