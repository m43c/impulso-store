import dotenv from "dotenv";

dotenv.config();

export const mongodbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/testdb";
export const port = process.env.PORT || 3000;
export const tokenSecret = process.env.TOKEN_SECRET;
