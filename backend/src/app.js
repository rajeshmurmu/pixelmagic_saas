import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

export default app;
