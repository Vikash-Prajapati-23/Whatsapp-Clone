import express from "express";
import { getAllMessages } from "../controllers/messageController.js";

const router = express.Router();

// GET all messages
router.get("/user-data", getAllMessages);

export default router;
