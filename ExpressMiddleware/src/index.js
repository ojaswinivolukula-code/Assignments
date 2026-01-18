import express from "express";
import { logger } from "./middleware/logger.middleware.js";
import todos_route from "./routes/todos.routes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(logger);
app.use("/todos", todos_route);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
