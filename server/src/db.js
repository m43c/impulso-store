import mongoose from "mongoose";
import { mongodbUri } from "./config.js";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(mongodbUri);
    console.log("Connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
