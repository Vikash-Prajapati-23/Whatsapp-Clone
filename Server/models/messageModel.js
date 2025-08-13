import mongoose from "mongoose";

const processedMessageSchema = new mongoose.Schema(
  {
    wa_id: { type: String, required: true }, // User's WhatsApp ID
    name: { type: String }, // Contact name
    from: { type: String, required: true }, // Who sent the message
    messageId: { type: String, required: true }, // WhatsApp message ID
    timestamp: { type: Date, required: true }, // Converted from string/unix
    text: { type: String }, // Message body
    type: { type: String }, // text, image, etc.
    displayPhoneNumber: { type: String }, // Business phone
    phoneNumberId: { type: String }, // Business phone ID
    status: { type: String, default: "sent" }, // sent, delivered, read
  },
  { timestamps: true }
);

export const messageModel = mongoose.model(
  "ProcessedMessage",
  processedMessageSchema
);
