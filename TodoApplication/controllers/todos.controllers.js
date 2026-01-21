import { readData, writeData } from "../models/todo.models.js";

export const getTodos = (req, res, next) => {
  try {
    const data = readData();
    res.status(200).json(data.todos);
  } catch (err) {
    next(err);
  }
};

export const getTodoById = (req, res, next) => {
  try {
    const data = readData();
    const todo = data.todos.find((t) => t.id == req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

export const createTodo = (req, res, next) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const data = readData();
    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      completed: false,
    };
    data.todos.push(newTodo);
    writeData(data);
    res.status(200).json(newTodo);
  } catch (err) {
    next(err);
  }
};
export const updateTodo = (req, res, next) => {
  try {
    const data = readData();
    const index = data.todos.findIndex((t) => (t.id == req.params.id));
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
    data.todos[index] = { ...data.todos[index], ...req.body };
    writeData(data);
    res.status(200).json(data.todos[index]);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = (req, res, next) => {
  try {
    const data = readData();
    const initialLength = data.todos.length;
    data.todos = data.todos.filter((t) => t.id != req.params.id);
    if (data.todos.length === initialLength) {
      return res.status(404).json({ message: "Todo not found" });
    }
    writeData(data);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    next(err);
  }
};
