const userController = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.post("/users/register", userController.addUser);
userRouter.post("/users/login", userController.loginUser);

module.exports = userRouter;
