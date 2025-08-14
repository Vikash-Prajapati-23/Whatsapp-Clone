import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import messageRoute from "./routes/messageRoutes.js";
import { ConnectToMongoURL } from "./connectToMongoDB/connectToMongoDB.js";

dotenv.config();

const mongoURL = process.env.mongoURL;
const PORT = process.env.PORT || 3100;

ConnectToMongoURL(mongoURL);

const app = express();

// ✅ Allowed origins for both development and production
const allowedOrigins = [
  "http://localhost:5173", // Dev frontend
  "https://whatsapp-clone-nu-ivory.vercel.app", // Vercel production
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// ✅ Routes
app.use("/api/get-messages", messageRoute);

app.get("/", (req, res) => {
  res.send("✅ Backend Root Route Working!");
});

// app.use("/api/auth", );

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT}`);
});
