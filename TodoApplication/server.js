import express from "express"
import todos_route from "./routes/todos.routes.js"
const app = express()
const PORT = 3000;
app.use(express.json())
app.use("/todos",todos_route)

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal server  error "
    })
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})