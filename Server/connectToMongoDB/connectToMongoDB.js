import mongoose from "mongoose";

export async function ConnectToMongoURL(URL) {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully.!");
  } catch (error) {
    console.log("Failed to connect to mongoDB.");
  }
}
