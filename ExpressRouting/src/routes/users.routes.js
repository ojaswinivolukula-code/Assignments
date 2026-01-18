import express from "express";
import { readFileSync, writeFileSync } from "node:fs";
const _route = express.Router();
const DB_PATH = "./src/db.json";

_route.post("/add", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  data.users.push(req.body);
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({ message: "User added" });
});

_route.get("/", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  res.json(data.users);
});
_route.get("/:userId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  const user = data.users.find((u) => u.id == req.params.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});
_route.put("/update/:userId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  const index = data.users.findIndex((u) => u.id == req.params.userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  data.users[index] = { ...data.users[index], ...req.body };
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "User updated sucessfully" });
});
_route.delete("/delete/:userId", (req, res) => {
  const data = JSON.parse(readFileSync(DB_PATH, "utf-8"));
  data.users = data.users.filter((u) => u.id != req.params.userId);
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "User deleted successfully" });
});
export default _route;
