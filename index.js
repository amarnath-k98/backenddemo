import express from "express";
import userRouter from "./src/routes/userRoutes.js";
import connectDB from "./src/config/db.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api/users", userRouter);

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  connectDB();
});




