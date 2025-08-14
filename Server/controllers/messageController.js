import { messageModel } from "../models/messageModel.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await messageModel.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

export const getUsersData = async (req, res) => {
  try {
    const { wa_id } = req.params;
    const messages = await messageModel.find({ wa_id }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user messages" });
  }
};
