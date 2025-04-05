import { configDotenv } from "dotenv";
// Load environment variables from .env file
configDotenv();
import app from "./src/app.js";
import { PORT } from "./lib/config.js";
import connectDB from "./lib/db.js";

// Connect to database and Start the server
connectDB()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
