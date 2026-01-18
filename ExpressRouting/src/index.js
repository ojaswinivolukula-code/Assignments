import express from "express";
import users_route from "./routes/users.routes.js";
import todos_route from "./routes/todos.routes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", users_route);
app.use("/todos", todos_route);
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
