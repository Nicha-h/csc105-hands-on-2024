import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/:id/complete", todoController.completeTodo);
todoRouter.patch("/:id/title", todoController.updateTodoTitle);
todoRouter.get("/user/:id", todoController.getTodosOfUser);

export { todoRouter };