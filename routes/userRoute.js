const userController = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.post("/users/register", userController.addUser);
userRouter.post("/users/login", userController.loginUser);
userRouter.get("/users", userController.getAllUser);
userRouter.get("/users/:id", userController.getUserById);

module.exports = userRouter;
