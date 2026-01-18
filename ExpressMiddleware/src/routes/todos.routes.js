import express from "express";
import { readFileSync, writeFileSync } from "node:fs";
import { rateLimiter } from "../middleware/rateLimiter.middleware.js";
import { validateTodo } from "../middleware/validate.middleware.js";
const _route = express.Router();
const DB_PATH = "./src/db.json";
_route.get("/",rateLimiter, (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  res.json(data.todos);
});

_route.get("/:todoId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  const todo = data.todos.find((t) => t.todoId == req.params.todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});
_route.post("/add", validateTodo,(req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  const newTodo = {
    todoId: Date.now(),
    title: req.body.title,
  };
  data.todos.push(newTodo);
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.status(201).json(newTodo);
});
_route.put("/update/:todoId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  const index = data.todos.findIndex((t) => t.todoId == req.params.todoId);
  if (index == -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  data.todos[index].title = req.body.title;
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Todo updated" });
});
_route.delete("/delete/:todoId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  data.todos = data.todos.filter((t) => t.todoId != req.params.todoId);
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Todo deleted" });
});
export default _route;
