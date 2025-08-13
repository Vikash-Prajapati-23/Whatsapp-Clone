import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import messageRoute from "./routes/messageRoutes.js";

import { ConnectToMongoURL } from "./connectToMongoDB/connectToMongoDB.js";

dotenv.config();

const mongoURL = process.env.mongoURL;

const PORT = 3100;

ConnectToMongoURL(mongoURL);


const app = express();


app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());

app.use(express.json());

app.use("/api/get-messages", messageRoute);

app.get("/", (req, res) => {
  res.send("✅ Backend Root Route Working!");
});

// app.use("/api/auth", );

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});