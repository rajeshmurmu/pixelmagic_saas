import mongoose from "mongoose";
import { DB_URI } from "./config.js";

const connectDB = async () => {
  try {
    // Connect to the database
    const instance = await mongoose.connect(DB_URI);
    if (instance.connection.host) {
      console.log(`MongoDB connected: ${instance.connection.host}`);
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
