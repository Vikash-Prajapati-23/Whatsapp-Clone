import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = 3100;

const app = express();

app.use(cookieParser);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend Root Route Working!");
});

// app.use("/api/auth", );

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});