import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
