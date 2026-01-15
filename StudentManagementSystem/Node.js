import express from "express";
import { readFileSync, writeFileSync } from "node:fs";

const app = express();
app.use(express.json());

function readData() {
  const data = readFileSync("db.json", "utf-8");
  return JSON.parse(data);
}
function writeData(data) {
  writeFileSync("db.json", JSON.stringify(data, null, 2));
}
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});
app.post("/students", (req, res) => {
  const data = readData();
  data.students.push(req.body);
  writeData(data);
  res.send("Student added");
});
app.put("/students", (req, res) => {
  const { id, name, course, year } = req.body;
  const data = readData();
  const student = data.students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;
  writeData(data);
  res.json({ message: "Student updated successfully" });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const index = data.students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  data.students.splice(index, 1);
  writeData(data);
  res.json({ message: "Student deleted successfully" });
});

app.listen(4000, () => {
  console.log("Server started");
});
