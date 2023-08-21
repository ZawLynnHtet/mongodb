const express = require("express");
const userCtrl = require("../controller/user_ctrl");

const userRouter = express.Router();

userRouter.route("/").post(userCtrl.postUser);

module.exports = userRouter;