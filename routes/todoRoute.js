const todoController = require("../controllers/todoController");
const authMiddleware = require("../middleware/auth");
const todoRouter = require("express").Router();

todoRouter.use(authMiddleware);

todoRouter.get("/todo", todoController.getAllTodo);
todoRouter.post("/todo", todoController.addTodo);
todoRouter.delete("/todo", todoController.deleteAllTodo);
todoRouter.get("/todo/:id", todoController.detailTodo);
todoRouter.put("/todo/:id", todoController.editTodo);
todoRouter.delete("/todo/:id", todoController.deleteTodo);

module.exports = todoRouter;
