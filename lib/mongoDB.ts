import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectMongoDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGO_DB is not defined.");
    }
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log("Error connecting to MongoDB :", error);
  }
};
