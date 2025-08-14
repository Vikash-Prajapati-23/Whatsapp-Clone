import express from "express";
import { getAllMessages, getUsersData } from "../controllers/messageController.js";

const router = express.Router();

// GET all messages
router.get("/user-data", getAllMessages);
router.get("/user-data/:wa_id", getUsersData);

export default router;
