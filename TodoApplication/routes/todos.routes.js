import express from "express";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.controllers.js";
const _route = express.Router();

_route.get("/", getTodos);
_route.get("/:id", getTodoById);
_route.post("/", createTodo);
_route.put("/:id", updateTodo);
_route.delete("/:id", deleteTodo);
export default _route;
